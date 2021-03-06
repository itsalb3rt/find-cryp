const express = require('express')
const axios = require('axios')

require('dotenv').config()

const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.get('/api/crypto', async (req, res) => {
  const minPrice = req.query.minPrice || 0
  const maxPrice = req.query.maxPrice || 1000000
  const maxSupply = req.query.maxSupply || 100000000000000000
  const dateAdded = req.query.dateAdded
  const networks = req.query.network
  // pagination
  const limit = Number(req.query.limit) || 10
  const offset = Number(req.query.offset) || 1

  let qs = `?start=${offset}&limit=${limit}&convert=USD&price_min=${minPrice}&price_max=${maxPrice}&circulating_supply_max=${maxSupply}`

  try {
    let response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest' + qs, {
      headers: {
        'X-CMC_PRO_API_KEY': `${process.env.API_KEY}`
      }
    });

    // Parse data from API

    let coins = response.data.data;
    coins.forEach(coin => {
      coin.marketCapUsd = coin.marketCapUsd ? parseFloat(coin.marketCapUsd) : 0
      coin.priceUsd = parseFloat(coin.priceUsd)
      coin.volumeUsd24Hr = parseFloat(coin.volumeUsd24Hr)
      coin.maxSupply = coin.maxSupply ? parseFloat(coin.maxSupply) : 0
      coin.supply = coin.supply ? parseFloat(coin.supply) : 0
      coin.changePercent24Hr = parseFloat(coin.changePercent24Hr)
    })

    if (networks) {
      // filter response tags.includes include any networks
      coins = coins.filter(coin => coin.tags.includes(networks))
    }

    if (dateAdded) {
      const compareTime = new Date(dateAdded).getTime()
      coins = coins.filter(coin => compareTime <= new Date(coin.date_added).getTime())
    }

    res.json({
      data: coins,
      hasMore: coins.length === limit,
      offset: offset === 0 ? limit + 1 : limit + offset
    })

  } catch (error) {
    console.log(error);
  }

});

app.get('/report', (req, res) => {
  res.sendFile(__dirname + '/public/report.html');
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || port}/report`)
})
