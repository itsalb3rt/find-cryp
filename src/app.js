const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.get('/api/crypto', async (req, res) => {

  const minPrice = req.query.minPrice
  const maxPrice = req.query.maxPrice
  const maxSupply = req.query.maxSupply
  const dateAdded = req.query.dateAdded
  const networks = req.query.network
  
  let qs = `?start=1&limit=5000&convert=USD&price_min=${minPrice}&price_max=${maxPrice}&circulating_supply_max=${maxSupply}`
  try {
    let response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest' + qs, {
      headers: { 'X-CMC_PRO_API_KEY': 'cf28e7cb-0f3d-428a-98b1-5921820d8c50' }
    });

    if (networks) {
      // filter response tags.includes include any networks
      response.data.data = response.data.data.filter(coin => coin.tags.includes(networks))
    }

    // filter response dateAdded
    if (dateAdded) {
      response.data.data = response.data.data.filter(coin => coin.date_added > dateAdded)
    }

    res.json(response.data.data)
  } catch (error) {
    console.log(error);
  }

});

app.get('/report', (req, res) => {
  res.sendFile(__dirname + '/public/report.html');
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || port}`)
})
