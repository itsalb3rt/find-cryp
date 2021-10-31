const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.get('/api/crypto', async (req, res) => {
  
  // let qs = `?start=1&limit=5000&convert=USD`
  // try {
  //   let response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest' + qs, {
  //     headers: { 'X-CMC_PRO_API_KEY': 'cf28e7cb-0f3d-428a-98b1-5921820d8c50' }
  //   });

  //   // filter response max_supply <= 1000000000 and quote.USD.price between 0.0001 and 0.01 and tags.includes('binance-smart-chain')
  //   let filteredResponse = response.data.data.filter(item => item.max_supply <= 1000000000 && item.quote.USD.price >= 0.0001 && item.quote.USD.price <= 0.01 && item.tags.includes('binance-smart-chain'))
  //   res.json(filteredResponse)
  // } catch (error) {
  //   console.log(error);
  // }

  const staticCrypto = [
    {
        "id": 3718,
        "name": "BitTorrent",
        "symbol": "BTT",
        "slug": "bittorrent",
        "num_market_pairs": 149,
        "date_added": "2019-01-31T00:00:00.000Z",
        "tags": [
            "platform",
            "distributed-computing",
            "filesharing",
            "storage",
            "binance-smart-chain",
            "binance-launchpad",
            "binance-labs-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 659952625000,
        "total_supply": 990000000000,
        "platform": {
            "id": 1958,
            "name": "Tron10",
            "symbol": "TRX",
            "slug": "tron",
            "token_address": "1002000"
        },
        "cmc_rank": 60,
        "last_updated": "2021-10-31T16:23:06.000Z",
        "quote": {
            "USD": {
                "price": 0.0039362110013,
                "volume_24h": 957452310.2558638,
                "volume_change_24h": -24.6245,
                "percent_change_1h": -2.05851397,
                "percent_change_24h": 0.84643448,
                "percent_change_7d": 10.04176362,
                "percent_change_30d": 16.77331975,
                "percent_change_60d": -9.36714537,
                "percent_change_90d": 34.38926084,
                "market_cap": 2597712782.8618135,
                "market_cap_dominance": 0.1009,
                "fully_diluted_market_cap": 3896848891.29,
                "last_updated": "2021-10-31T16:23:06.000Z"
            }
        }
    },
    {
        "id": 3935,
        "name": "SparkPoint",
        "symbol": "SRK",
        "slug": "sparkpoint",
        "num_market_pairs": 11,
        "date_added": "2019-05-14T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 8258958104.777814,
        "total_supply": 13656206158.837975,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0x0488401c3f535193fa8df029d9ffe615a06e74e6"
        },
        "cmc_rank": 574,
        "last_updated": "2021-10-31T16:23:08.000Z",
        "quote": {
            "USD": {
                "price": 0.00640869521075,
                "volume_24h": 4870049.70876381,
                "volume_change_24h": 88.0609,
                "percent_change_1h": -1.98327574,
                "percent_change_24h": 24.55117082,
                "percent_change_7d": 33.71936818,
                "percent_change_30d": 75.10012002,
                "percent_change_60d": 57.87080887,
                "percent_change_90d": 94.70758222,
                "market_cap": 52929145.25187447,
                "market_cap_dominance": 0.0021,
                "fully_diluted_market_cap": 87518463.01,
                "last_updated": "2021-10-31T16:23:08.000Z"
            }
        }
    },
    {
        "id": 9691,
        "name": "Venus Reward Token",
        "symbol": "VRT",
        "slug": "venus-reward-token",
        "num_market_pairs": 6,
        "date_added": "2021-05-11T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 21999981080,
        "total_supply": 30000000000,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x5F84ce30DC3cF7909101C69086c50De191895883"
        },
        "cmc_rank": 843,
        "last_updated": "2021-10-31T16:23:05.000Z",
        "quote": {
            "USD": {
                "price": 0.00095238983871,
                "volume_24h": 968524.49926446,
                "volume_change_24h": 17.4549,
                "percent_change_1h": -1.60031048,
                "percent_change_24h": 1.38451025,
                "percent_change_7d": -22.36434597,
                "percent_change_30d": -13.89921543,
                "percent_change_60d": -38.3139946,
                "percent_change_90d": -42.78332722,
                "market_cap": 20952558.43240425,
                "market_cap_dominance": 0.0008,
                "fully_diluted_market_cap": 28571695.16,
                "last_updated": "2021-10-31T16:23:05.000Z"
            }
        }
    },
    {
        "id": 4024,
        "name": "Raven Protocol",
        "symbol": "RAVEN",
        "slug": "raven-protocol",
        "num_market_pairs": 2,
        "date_added": "2019-06-19T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 4494272006.073109,
        "total_supply": 10000000000,
        "platform": {
            "id": 1839,
            "name": "Binance Chain (BEP2)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "RAVEN-F66"
        },
        "cmc_rank": 1115,
        "last_updated": "2021-10-31T16:22:10.000Z",
        "quote": {
            "USD": {
                "price": 0.00202069715768,
                "volume_24h": 39535.8366979,
                "volume_change_24h": -26.1539,
                "percent_change_1h": -1.39905387,
                "percent_change_24h": -4.55178327,
                "percent_change_7d": -6.0581149,
                "percent_change_30d": 99.75548686,
                "percent_change_60d": 87.55110017,
                "percent_change_90d": 105.48282006,
                "market_cap": 9081562.668512722,
                "market_cap_dominance": 0.0004,
                "fully_diluted_market_cap": 20206971.58,
                "last_updated": "2021-10-31T16:22:10.000Z"
            }
        }
    },
    {
        "id": 2341,
        "name": "SwftCoin",
        "symbol": "SWFTC",
        "slug": "swftcoin",
        "num_market_pairs": 19,
        "date_added": "2018-01-04T00:00:00.000Z",
        "tags": [
            "marketplace",
            "defi",
            "interoperability",
            "payments",
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 4004999999,
        "total_supply": 10000000000,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0x0bb217E40F8a5Cb79Adf04E1aAb60E5abd0dfC1e"
        },
        "cmc_rank": 1184,
        "last_updated": "2021-10-31T16:23:04.000Z",
        "quote": {
            "USD": {
                "price": 0.00181215074641,
                "volume_24h": 4347902.596907,
                "volume_change_24h": 35.6531,
                "percent_change_1h": 9.6406395,
                "percent_change_24h": 9.37738016,
                "percent_change_7d": 4.98117569,
                "percent_change_30d": 23.342102,
                "percent_change_60d": -16.26505426,
                "percent_change_90d": 30.40029066,
                "market_cap": 7257663.7375599,
                "market_cap_dominance": 0.0003,
                "fully_diluted_market_cap": 18121507.46,
                "last_updated": "2021-10-31T16:23:04.000Z"
            }
        }
    },
    {
        "id": 7244,
        "name": "SaTT",
        "symbol": "SATT",
        "slug": "satt",
        "num_market_pairs": 7,
        "date_added": "2020-09-30T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 3244898181.252978,
        "total_supply": 12270063309.622978,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0xDF49C9F599A0A9049D97CFF34D0C30E468987389"
        },
        "cmc_rank": 1264,
        "last_updated": "2021-10-31T16:23:03.000Z",
        "quote": {
            "USD": {
                "price": 0.00172295554798,
                "volume_24h": 63205.62097753,
                "volume_change_24h": 5.0245,
                "percent_change_1h": -0.2137896,
                "percent_change_24h": -7.54685665,
                "percent_change_7d": -25.16884798,
                "percent_change_30d": -37.96460765,
                "percent_change_60d": 40.16811184,
                "percent_change_90d": 42.29863896,
                "market_cap": 5590815.32402003,
                "market_cap_dominance": 0.0002,
                "fully_diluted_market_cap": 21140773.65,
                "last_updated": "2021-10-31T16:23:03.000Z"
            }
        }
    },
    {
        "id": 5963,
        "name": "Centric Swap",
        "symbol": "CNS",
        "slug": "centric-swap",
        "num_market_pairs": 13,
        "date_added": "2020-07-30T00:00:00.000Z",
        "tags": [
            "services",
            "collectibles-nfts",
            "defi",
            "yield-farming",
            "binance-smart-chain",
            "governance"
        ],
        "max_supply": null,
        "circulating_supply": 7342691560,
        "total_supply": 159158246060,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xF6Cb4ad242BaB681EfFc5dE40f7c8FF921a12d63"
        },
        "cmc_rank": 1299,
        "last_updated": "2021-10-31T16:22:10.000Z",
        "quote": {
            "USD": {
                "price": 0.00066265245432,
                "volume_24h": 3547664.79895615,
                "volume_change_24h": 6.352,
                "percent_change_1h": 0.19633357,
                "percent_change_24h": -4.82675531,
                "percent_change_7d": -5.27369168,
                "percent_change_30d": 282.95209074,
                "percent_change_60d": 269.18289613,
                "percent_change_90d": 206.45585237,
                "market_cap": 4865652.58354875,
                "market_cap_dominance": 0.0002,
                "fully_diluted_market_cap": 105466602.38,
                "last_updated": "2021-10-31T16:22:10.000Z"
            }
        }
    },
    {
        "id": 4826,
        "name": "ZUM TOKEN",
        "symbol": "ZUM",
        "slug": "zum-token",
        "num_market_pairs": 3,
        "date_added": "2019-10-25T00:00:00.000Z",
        "tags": [
            "ethereum",
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 14086995469.00796,
        "total_supply": 71166730740.42632,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0xe0b9bcd54bf8a730ea5d3f1ffce0885e911a502c"
        },
        "cmc_rank": 1446,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.00022073612424,
                "volume_24h": 0,
                "volume_change_24h": 0,
                "percent_change_1h": -0.51071073,
                "percent_change_24h": -1.93704924,
                "percent_change_7d": -1.68242632,
                "percent_change_30d": 26.97919047,
                "percent_change_60d": 458.73352893,
                "percent_change_90d": 541.57844527,
                "market_cap": 3109508.782015258,
                "market_cap_dominance": 0.0001,
                "fully_diluted_market_cap": 15709068.32,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    },
    {
        "id": 6940,
        "name": "Lead Wallet",
        "symbol": "LEAD",
        "slug": "lead-wallet",
        "num_market_pairs": 6,
        "date_added": "2020-09-08T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 977371361,
        "circulating_supply": 505310846,
        "total_supply": 964310845.9547057,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0x1dd80016e3d4ae146ee2ebb484e8edd92dacc4ce"
        },
        "cmc_rank": 1456,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.00596010736825,
                "volume_24h": 62538.77617493,
                "volume_change_24h": 13.4045,
                "percent_change_1h": 0.26220028,
                "percent_change_24h": 2.24008233,
                "percent_change_7d": -2.04208861,
                "percent_change_30d": -26.34395492,
                "percent_change_60d": 33.42449979,
                "percent_change_90d": 42.30537391,
                "market_cap": 3011706.8965012413,
                "market_cap_dominance": 0.0001,
                "fully_diluted_market_cap": 5825238.25,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    },
    {
        "id": 3625,
        "name": "QuadrantProtocol",
        "symbol": "EQUAD",
        "slug": "quadrantprotocol",
        "num_market_pairs": 5,
        "date_added": "2018-12-04T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 415437335.1100229,
        "total_supply": 1000000000,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0xc28e931814725bbeb9e670676fabbcb694fe7df2"
        },
        "cmc_rank": 1488,
        "last_updated": "2021-10-31T16:23:06.000Z",
        "quote": {
            "USD": {
                "price": 0.00662007969194,
                "volume_24h": 78687.51630449,
                "volume_change_24h": 70.2376,
                "percent_change_1h": -0.59353479,
                "percent_change_24h": -2.21022476,
                "percent_change_7d": 10.17789248,
                "percent_change_30d": 19.49577628,
                "percent_change_60d": -21.06947868,
                "percent_change_90d": 25.48799451,
                "market_cap": 2750228.265435535,
                "market_cap_dominance": 0.0001,
                "fully_diluted_market_cap": 6620079.69,
                "last_updated": "2021-10-31T16:23:06.000Z"
            }
        }
    },
    {
        "id": 2001,
        "name": "ColossusXT",
        "symbol": "COLX",
        "slug": "colossusxt",
        "num_market_pairs": 6,
        "date_added": "2017-09-29T00:00:00.000Z",
        "tags": [
            "privacy",
            "masternodes",
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 12732356945,
        "total_supply": 13272168743.941252,
        "platform": null,
        "cmc_rank": 1565,
        "last_updated": "2021-10-31T16:22:10.000Z",
        "quote": {
            "USD": {
                "price": 0.00017012903814,
                "volume_24h": 11.49811953,
                "volume_change_24h": -88.7615,
                "percent_change_1h": 0.00168279,
                "percent_change_24h": -14.57592098,
                "percent_change_7d": -71.67593396,
                "percent_change_30d": -64.03835774,
                "percent_change_60d": -18.38365673,
                "percent_change_90d": -50.15436918,
                "market_cap": 2166143.640307999,
                "market_cap_dominance": 0.0001,
                "fully_diluted_market_cap": 2257981.3,
                "last_updated": "2021-10-31T16:22:10.000Z"
            }
        }
    },
    {
        "id": 9752,
        "name": "AFEN Blockchain",
        "symbol": "AFEN",
        "slug": "afen-blockchain",
        "num_market_pairs": 3,
        "date_added": "2021-05-12T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 849850000,
        "circulating_supply": 146865358.66877133,
        "total_supply": 850000000,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xd0840d5f67206f865aee7cce075bd4484cd3cc81"
        },
        "cmc_rank": 1737,
        "last_updated": "2021-10-31T16:23:05.000Z",
        "quote": {
            "USD": {
                "price": 0.0090236345777,
                "volume_24h": 661469.99614139,
                "volume_change_24h": 29.9398,
                "percent_change_1h": -0.35901297,
                "percent_change_24h": 1.69214515,
                "percent_change_7d": 1.41707649,
                "percent_change_30d": -25.3012294,
                "percent_change_60d": -23.62619339,
                "percent_change_90d": 34.13926669,
                "market_cap": 1325259.3287498374,
                "market_cap_dominance": 0.0001,
                "fully_diluted_market_cap": 7668735.85,
                "last_updated": "2021-10-31T16:23:05.000Z"
            }
        }
    },
    {
        "id": 5775,
        "name": "Oikos",
        "symbol": "OKS",
        "slug": "oikos",
        "num_market_pairs": 5,
        "date_added": "2020-07-14T00:00:00.000Z",
        "tags": [
            "defi",
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 188129309.93446055,
        "total_supply": 195899536.68120852,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x18aCf236eB40c0d4824Fb8f2582EBbEcD325Ef6a"
        },
        "cmc_rank": 1741,
        "last_updated": "2021-10-31T16:23:06.000Z",
        "quote": {
            "USD": {
                "price": 0.00695599461888,
                "volume_24h": 7390.10633782,
                "volume_change_24h": -59.6169,
                "percent_change_1h": 0.70946933,
                "percent_change_24h": -5.19009377,
                "percent_change_7d": 10.06554338,
                "percent_change_30d": 10.8593232,
                "percent_change_60d": -45.14076685,
                "percent_change_90d": 52.64311414,
                "market_cap": 1308626.4675577153,
                "market_cap_dominance": 0.0001,
                "fully_diluted_market_cap": 1362676.12,
                "last_updated": "2021-10-31T16:23:06.000Z"
            }
        }
    },
    {
        "id": 7436,
        "name": "BonFi",
        "symbol": "BNF",
        "slug": "bonfi",
        "num_market_pairs": 5,
        "date_added": "2020-10-17T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 962499999,
        "circulating_supply": 297418335,
        "total_supply": 962499999,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0x1DE5e000C41C8d35b9f1f4985C23988f05831057"
        },
        "cmc_rank": 1859,
        "last_updated": "2021-10-31T16:23:04.000Z",
        "quote": {
            "USD": {
                "price": 0.0029586769835,
                "volume_24h": 130603.17141679,
                "volume_change_24h": -41.2627,
                "percent_change_1h": 0.0217947,
                "percent_change_24h": -14.01533726,
                "percent_change_7d": -23.16698073,
                "percent_change_30d": -29.59310077,
                "percent_change_60d": -10.86902321,
                "percent_change_90d": -15.29771241,
                "market_cap": 879964.7822353925,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 2847726.59,
                "last_updated": "2021-10-31T16:23:04.000Z"
            }
        }
    },
    {
        "id": 4045,
        "name": "Catex Token",
        "symbol": "CATT",
        "slug": "catex-token",
        "num_market_pairs": 2,
        "date_added": "2019-10-14T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 764538331,
        "total_supply": 1262219478,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0x6e605c269e0c92e70beeb85486f1fc550f9380bd"
        },
        "cmc_rank": 1880,
        "last_updated": "2021-10-31T16:22:10.000Z",
        "quote": {
            "USD": {
                "price": 0.00110091150083,
                "volume_24h": 6278.67563329,
                "volume_change_24h": 66.5258,
                "percent_change_1h": 4.75520956,
                "percent_change_24h": -8.32461512,
                "percent_change_7d": -8.29624049,
                "percent_change_30d": -38.77726134,
                "percent_change_60d": -51.29624787,
                "percent_change_90d": -38.83539893,
                "market_cap": 841689.0414232734,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 1389591.94,
                "last_updated": "2021-10-31T16:22:10.000Z"
            }
        }
    },
    {
        "id": 3769,
        "name": "HashBX",
        "symbol": "HBX",
        "slug": "hashsbx",
        "num_market_pairs": 2,
        "date_added": "2019-03-01T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 629280962.755261,
        "total_supply": 1000000000,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x7b674129D7cE4b17D7D69c4c68A00aa429230e88"
        },
        "cmc_rank": 1927,
        "last_updated": "2021-10-31T16:23:08.000Z",
        "quote": {
            "USD": {
                "price": 0.00118831731811,
                "volume_24h": 0,
                "volume_change_24h": -100,
                "percent_change_1h": -0.26916019,
                "percent_change_24h": 1.58149878,
                "percent_change_7d": 3.18224603,
                "percent_change_30d": 51.07005983,
                "percent_change_60d": 150.26371794,
                "percent_change_90d": 48.82174796,
                "market_cap": 747785.4659990105,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 1188317.32,
                "last_updated": "2021-10-31T16:23:08.000Z"
            }
        }
    },
    {
        "id": 8942,
        "name": "Paybswap",
        "symbol": "PAYB",
        "slug": "paybswap",
        "num_market_pairs": 5,
        "date_added": "2021-03-25T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 152210479.18877798,
        "total_supply": 1000000000,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x916792fd41855914ba4b71285c8a05b866f0618b"
        },
        "cmc_rank": 1932,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.00487444634475,
                "volume_24h": 110377.48168064,
                "volume_change_24h": -26.0764,
                "percent_change_1h": 1.08024853,
                "percent_change_24h": 2.49701198,
                "percent_change_7d": 0.78810332,
                "percent_change_30d": 5.5582766,
                "percent_change_60d": -23.75078843,
                "percent_change_90d": -51.90297865,
                "market_cap": 741941.8139143848,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 4874446.34,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    },
    {
        "id": 3449,
        "name": "MMOCoin",
        "symbol": "MMO",
        "slug": "mmocoin",
        "num_market_pairs": 11,
        "date_added": "2018-10-15T00:00:00.000Z",
        "tags": [
            "mineable",
            "e-commerce",
            "gaming",
            "binance-smart-chain"
        ],
        "max_supply": 260000000,
        "circulating_supply": 68437919.98375419,
        "total_supply": 118993176.77355419,
        "platform": null,
        "cmc_rank": 2016,
        "last_updated": "2021-10-31T16:23:05.000Z",
        "quote": {
            "USD": {
                "price": 0.00784241375138,
                "volume_24h": 436.56097086,
                "volume_change_24h": -26.1923,
                "percent_change_1h": -0.54103965,
                "percent_change_24h": 6.64173843,
                "percent_change_7d": 49.56723344,
                "percent_change_30d": 45.1387172,
                "percent_change_60d": 78.11360514,
                "percent_change_90d": 58.94415814,
                "market_cap": 536718.4847964379,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 2039027.58,
                "last_updated": "2021-10-31T16:23:05.000Z"
            }
        }
    },
    {
        "id": 4207,
        "name": "Birdchain",
        "symbol": "BIRD",
        "slug": "birdchain",
        "num_market_pairs": 7,
        "date_added": "2019-08-02T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 279774088.7785226,
        "total_supply": 287504829.4830753,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0x026e62dded1a6ad07d93d39f96b9eabd59665e0d"
        },
        "cmc_rank": 2112,
        "last_updated": "2021-10-31T16:23:03.000Z",
        "quote": {
            "USD": {
                "price": 0.0012904072226,
                "volume_24h": 148192.03731942,
                "volume_change_24h": -8.8613,
                "percent_change_1h": -0.45701989,
                "percent_change_24h": 1.13426595,
                "percent_change_7d": -0.21961781,
                "percent_change_30d": -13.57226568,
                "percent_change_60d": -36.44324564,
                "percent_change_90d": 7.84110677,
                "market_cap": 361022.5048561392,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 370998.31,
                "last_updated": "2021-10-31T16:23:03.000Z"
            }
        }
    },
    {
        "id": 2479,
        "name": "Equal",
        "symbol": "EQL",
        "slug": "equal",
        "num_market_pairs": 1,
        "date_added": "2018-01-29T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 405842550.014463,
        "total_supply": 675259060,
        "platform": {
            "id": 1839,
            "name": "Binance Chain (BEP2)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "EQL-586"
        },
        "cmc_rank": 2126,
        "last_updated": "2021-10-31T16:23:05.000Z",
        "quote": {
            "USD": {
                "price": 0.00085059814941,
                "volume_24h": 9215.7185403,
                "volume_change_24h": 62.1226,
                "percent_change_1h": -0.36999297,
                "percent_change_24h": -0.08385508,
                "percent_change_7d": 5.75618989,
                "percent_change_30d": -31.53916421,
                "percent_change_60d": -60.20106508,
                "percent_change_90d": -32.33656585,
                "market_cap": 345208.92199413764,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 574374.11,
                "last_updated": "2021-10-31T16:23:05.000Z"
            }
        }
    },
    {
        "id": 2978,
        "name": "AceD",
        "symbol": "ACED",
        "slug": "aced",
        "num_market_pairs": 3,
        "date_added": "2018-07-30T00:00:00.000Z",
        "tags": [
            "defi",
            "entertainment",
            "binance-smart-chain"
        ],
        "max_supply": 200000000,
        "circulating_supply": 249987000,
        "total_supply": 250000000,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x3b98bbefe14b98000f10124ca95ed298ac9db3ff"
        },
        "cmc_rank": 2148,
        "last_updated": "2021-10-31T16:22:09.000Z",
        "quote": {
            "USD": {
                "price": 0.00122437010388,
                "volume_24h": 79293.01702785,
                "volume_change_24h": 19.3977,
                "percent_change_1h": 7.54052886,
                "percent_change_24h": -9.44289282,
                "percent_change_7d": 17.93563143,
                "percent_change_30d": 55.90368667,
                "percent_change_60d": 15.06057855,
                "percent_change_90d": 241.93836786,
                "market_cap": 306076.6091586496,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 244874.02,
                "last_updated": "2021-10-31T16:22:09.000Z"
            }
        }
    },
    {
        "id": 5407,
        "name": "Kingdom Game 4.0",
        "symbol": "KDG",
        "slug": "kingdom-game-4",
        "num_market_pairs": 2,
        "date_added": "2020-04-02T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 988125000,
        "circulating_supply": 98793770.95625694,
        "total_supply": 988125000,
        "platform": {
            "id": 1958,
            "name": "Tron20",
            "symbol": "TRX",
            "slug": "tron",
            "token_address": "TYM9eM22SCynRc5YaMxE2PX1kwv7H2rXAu"
        },
        "cmc_rank": 2161,
        "last_updated": "2021-10-31T16:23:04.000Z",
        "quote": {
            "USD": {
                "price": 0.00295877838479,
                "volume_24h": 427647.81624748,
                "volume_change_24h": 5.5214,
                "percent_change_1h": 4.22341504,
                "percent_change_24h": -1.14847868,
                "percent_change_7d": -3.33066773,
                "percent_change_30d": 4.98246683,
                "percent_change_60d": -8.93458603,
                "percent_change_90d": 228.99827744,
                "market_cap": 292308.8740572671,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 2923642.89,
                "last_updated": "2021-10-31T16:23:04.000Z"
            }
        }
    },
    {
        "id": 7698,
        "name": "CorionX",
        "symbol": "CORX",
        "slug": "corionx",
        "num_market_pairs": 4,
        "date_added": "2020-11-17T00:00:00.000Z",
        "tags": [
            "ethereum",
            "binance-smart-chain"
        ],
        "max_supply": 400000000,
        "circulating_supply": 118503212.80052835,
        "total_supply": 400000000,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0x26a604DFFE3ddaB3BEE816097F81d3C4a2A4CF97"
        },
        "cmc_rank": 2244,
        "last_updated": "2021-10-31T16:23:06.000Z",
        "quote": {
            "USD": {
                "price": 0.00176314592454,
                "volume_24h": 145755.35610998,
                "volume_change_24h": -37.0531,
                "percent_change_1h": -0.59652166,
                "percent_change_24h": -4.37881146,
                "percent_change_7d": -1.19426879,
                "percent_change_30d": -11.01827691,
                "percent_change_60d": -9.01785345,
                "percent_change_90d": 7.13513849,
                "market_cap": 208938.4566941479,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 705258.37,
                "last_updated": "2021-10-31T16:23:06.000Z"
            }
        }
    },
    {
        "id": 9019,
        "name": "Polar",
        "symbol": "POLARV3",
        "slug": "polar",
        "num_market_pairs": 2,
        "date_added": "2021-03-30T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 50000000,
        "circulating_supply": 32346551,
        "total_supply": 50000000,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x70905594023cb2f37f3103fdc70315ad1601d6ef"
        },
        "cmc_rank": 2250,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.00603501301382,
                "volume_24h": 0,
                "volume_change_24h": 0,
                "percent_change_1h": -0.08915002,
                "percent_change_24h": -1.48180854,
                "percent_change_7d": -38.47463541,
                "percent_change_30d": -61.32351091,
                "percent_change_60d": -15.79171933,
                "percent_change_90d": 14.62432341,
                "market_cap": 195211.85623719235,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 301750.65,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    },
    {
        "id": 4142,
        "name": "Cubiex",
        "symbol": "CBIX",
        "slug": "cubiex",
        "num_market_pairs": 2,
        "date_added": "2019-07-22T00:00:00.000Z",
        "tags": [
            "interoperability",
            "ethereum",
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 71852557,
        "total_supply": 71852557,
        "platform": {
            "id": 1839,
            "name": "Binance Chain (BEP2)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "CBIX-3C9"
        },
        "cmc_rank": 2283,
        "last_updated": "2021-10-31T16:23:03.000Z",
        "quote": {
            "USD": {
                "price": 0.0023490674432,
                "volume_24h": 835.8604522,
                "volume_change_24h": -58.094,
                "percent_change_1h": -0.23182947,
                "percent_change_24h": -0.97737922,
                "percent_change_7d": -20.61993441,
                "percent_change_30d": -47.85037895,
                "percent_change_60d": -10.35575362,
                "percent_change_90d": -51.0832458,
                "market_cap": 168786.50235937227,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 168786.5,
                "last_updated": "2021-10-31T16:23:03.000Z"
            }
        }
    },
    {
        "id": 3051,
        "name": "Bitblocks",
        "symbol": "BBK",
        "slug": "bitblocks",
        "num_market_pairs": 2,
        "date_added": "2018-08-03T00:00:00.000Z",
        "tags": [
            "mineable",
            "binance-smart-chain"
        ],
        "max_supply": 584000000,
        "circulating_supply": 263886014.78617382,
        "total_supply": 273203440,
        "platform": null,
        "cmc_rank": 2291,
        "last_updated": "2021-10-31T16:22:09.000Z",
        "quote": {
            "USD": {
                "price": 0.0006033137935,
                "volume_24h": 794.40076801,
                "volume_change_24h": 3450.2228,
                "percent_change_1h": -0.50255631,
                "percent_change_24h": -50.72278558,
                "percent_change_7d": -49.77841549,
                "percent_change_30d": -36.23617976,
                "percent_change_60d": -57.6466794,
                "percent_change_90d": -49.56751499,
                "market_cap": 159206.07263224362,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 352335.26,
                "last_updated": "2021-10-31T16:22:09.000Z"
            }
        }
    },
    {
        "id": 3907,
        "name": "BitCash",
        "symbol": "BITC",
        "slug": "bitcash",
        "num_market_pairs": 6,
        "date_added": "2019-05-24T00:00:00.000Z",
        "tags": [
            "mineable",
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 22198153.441419,
        "total_supply": 31675546.636657,
        "platform": null,
        "cmc_rank": 2293,
        "last_updated": "2021-10-31T16:22:09.000Z",
        "quote": {
            "USD": {
                "price": 0.00716127546928,
                "volume_24h": 352.80088705,
                "volume_change_24h": 14.5407,
                "percent_change_1h": -8.20025981,
                "percent_change_24h": -0.65410728,
                "percent_change_7d": -17.06766479,
                "percent_change_30d": 5.04484917,
                "percent_change_60d": -38.81912723,
                "percent_change_90d": -49.07880667,
                "market_cap": 158967.0917033473,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 226837.32,
                "last_updated": "2021-10-31T16:22:09.000Z"
            }
        }
    },
    {
        "id": 3158,
        "name": "ZCore",
        "symbol": "ZCR",
        "slug": "zcore",
        "num_market_pairs": 3,
        "date_added": "2018-08-13T00:00:00.000Z",
        "tags": [
            "mineable",
            "masternodes",
            "binance-smart-chain"
        ],
        "max_supply": 18000000,
        "circulating_supply": 11244631.81699686,
        "total_supply": 11244631.81699686,
        "platform": null,
        "cmc_rank": 2362,
        "last_updated": "2021-10-31T16:23:03.000Z",
        "quote": {
            "USD": {
                "price": 0.009191222356,
                "volume_24h": 148.69330785,
                "volume_change_24h": -60.6516,
                "percent_change_1h": -0.38195749,
                "percent_change_24h": -12.44591706,
                "percent_change_7d": 9.29097555,
                "percent_change_30d": -16.05716329,
                "percent_change_60d": -30.23503647,
                "percent_change_90d": -46.46885874,
                "market_cap": 103351.91134137043,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 165442,
                "last_updated": "2021-10-31T16:23:03.000Z"
            }
        }
    },
    {
        "id": 9235,
        "name": "Hyper Finance",
        "symbol": "HYFI",
        "slug": "hyper-finance",
        "num_market_pairs": 2,
        "date_added": "2021-04-15T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 200371432,
        "circulating_supply": 31658686,
        "total_supply": 200371432,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x9a319b959e33369c5eaa494a770117ee3e585318"
        },
        "cmc_rank": 2415,
        "last_updated": "2021-10-31T16:23:02.000Z",
        "quote": {
            "USD": {
                "price": 0.00239388480363,
                "volume_24h": 480.34468739,
                "volume_change_24h": -34.7261,
                "percent_change_1h": -0.13888561,
                "percent_change_24h": -0.45551119,
                "percent_change_7d": 13.85514233,
                "percent_change_30d": 8.50177177,
                "percent_change_60d": -70.43043664,
                "percent_change_90d": -89.89654728,
                "market_cap": 75787.24731829383,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 479666.13,
                "last_updated": "2021-10-31T16:23:02.000Z"
            }
        }
    },
    {
        "id": 8870,
        "name": "Tutti Frutti",
        "symbol": "TFF",
        "slug": "tutti-frutti",
        "num_market_pairs": 1,
        "date_added": "2021-03-18T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 950000000,
        "circulating_supply": 77892927.54167669,
        "total_supply": 949667852.7952824,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x2d69c55baecefc6ec815239da0a985747b50db6e"
        },
        "cmc_rank": 2424,
        "last_updated": "2021-10-31T16:23:06.000Z",
        "quote": {
            "USD": {
                "price": 0.00092776333624,
                "volume_24h": 5491.11908764,
                "volume_change_24h": 17.9459,
                "percent_change_1h": -1.0702473,
                "percent_change_24h": -3.4287588,
                "percent_change_7d": -13.73532087,
                "percent_change_30d": 7.98829991,
                "percent_change_60d": -27.31030864,
                "percent_change_90d": -10.13376655,
                "market_cap": 72266.20232556654,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 881375.17,
                "last_updated": "2021-10-31T16:23:06.000Z"
            }
        }
    },
    {
        "id": 7867,
        "name": "Bitcashpay (old)",
        "symbol": "BCP",
        "slug": "bitcashpay",
        "num_market_pairs": 1,
        "date_added": "2020-12-06T00:00:00.000Z",
        "tags": [
            "binance-smart-chain",
            "trustswap-launchpad"
        ],
        "max_supply": 850000000,
        "circulating_supply": 198655033.02519366,
        "total_supply": 850000000,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0xe047705117Eb07e712C3d684f5B18E74577e83aC"
        },
        "cmc_rank": 2458,
        "last_updated": "2021-10-31T16:23:08.000Z",
        "quote": {
            "USD": {
                "price": 0.00028831926978,
                "volume_24h": 0,
                "volume_change_24h": -100,
                "percent_change_1h": -1.1157819,
                "percent_change_24h": -4.35165282,
                "percent_change_7d": 17.55618824,
                "percent_change_30d": -61.11034285,
                "percent_change_60d": -91.93009462,
                "percent_change_90d": -95.8728529,
                "market_cap": 57276.07405994562,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 245071.38,
                "last_updated": "2021-10-31T16:23:08.000Z"
            }
        }
    },
    {
        "id": 3027,
        "name": "Webcoin",
        "symbol": "WEB",
        "slug": "webcoin",
        "num_market_pairs": 1,
        "date_added": "2018-08-02T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 55439990.5,
        "total_supply": 1000000000,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0xf344490abd414dafa97f34c8ca501b0aa5bf8873"
        },
        "cmc_rank": 2491,
        "last_updated": "2021-10-31T16:22:09.000Z",
        "quote": {
            "USD": {
                "price": 0.0008403425252,
                "volume_24h": 48.98205318,
                "volume_change_24h": -75.4317,
                "percent_change_1h": -0.3650914,
                "percent_change_24h": -2.32567114,
                "percent_change_7d": -8.81005863,
                "percent_change_30d": -31.67675778,
                "percent_change_60d": -38.47253811,
                "percent_change_90d": -37.93243094,
                "market_cap": 46588.58161383401,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 840342.53,
                "last_updated": "2021-10-31T16:22:09.000Z"
            }
        }
    },
    {
        "id": 2966,
        "name": "Fox Trading",
        "symbol": "FOXT",
        "slug": "fox-trading",
        "num_market_pairs": 1,
        "date_added": "2018-07-25T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 8487614,
        "total_supply": 8487614,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x50ea9c9f88aeab9f554b8ffb4d7a1017957e866a"
        },
        "cmc_rank": 2546,
        "last_updated": "2021-10-31T16:22:09.000Z",
        "quote": {
            "USD": {
                "price": 0.00361521538497,
                "volume_24h": 0,
                "volume_change_24h": 0,
                "percent_change_1h": -0.3556018,
                "percent_change_24h": -2.27856961,
                "percent_change_7d": -9.6435894,
                "percent_change_30d": -77.52635531,
                "percent_change_60d": -79.84281479,
                "percent_change_90d": -57.31040208,
                "market_cap": 30684.552714486763,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 30684.55,
                "last_updated": "2021-10-31T16:22:09.000Z"
            }
        }
    },
    {
        "id": 7467,
        "name": "Swirge",
        "symbol": "SWG",
        "slug": "swirge",
        "num_market_pairs": 2,
        "date_added": "2020-10-21T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 8000000,
        "circulating_supply": 11980558.778553,
        "total_supply": 79709911.43,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xe792f64c582698b8572aaf765bdc426ac3aefb6b"
        },
        "cmc_rank": 2596,
        "last_updated": "2021-10-31T16:23:04.000Z",
        "quote": {
            "USD": {
                "price": 0.00165122860839,
                "volume_24h": 82595.83777213,
                "volume_change_24h": 29.5353,
                "percent_change_1h": -0.43164687,
                "percent_change_24h": 23.43778855,
                "percent_change_7d": -3.0301541,
                "percent_change_30d": -10.44839326,
                "percent_change_60d": -34.20374613,
                "percent_change_90d": -24.32353873,
                "market_cap": 19782.641399644668,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 13209.83,
                "last_updated": "2021-10-31T16:23:04.000Z"
            }
        }
    },
    {
        "id": 11076,
        "name": "JOJO",
        "symbol": "JOJO",
        "slug": "jojo",
        "num_market_pairs": 1,
        "date_added": "2021-07-28T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x78a499a998bdd5a84cf8b5abe49100d82de12f1c"
        },
        "cmc_rank": 2918,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.00070643352777,
                "volume_24h": 3477849.67969137,
                "volume_change_24h": 69.1212,
                "percent_change_1h": 1.40619448,
                "percent_change_24h": 8.96172036,
                "percent_change_7d": 136.35498769,
                "percent_change_30d": 302.9551335,
                "percent_change_60d": 716.95389376,
                "percent_change_90d": 0,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 0,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    },
    {
        "id": 9615,
        "name": "Polylastic",
        "symbol": "POLX",
        "slug": "polylastic",
        "num_market_pairs": 2,
        "date_added": "2021-05-06T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 0,
        "total_supply": 100000000000,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xbe510da084e084e3c27b20d79c135dc841135c7f"
        },
        "cmc_rank": 3027,
        "last_updated": "2021-10-31T16:23:05.000Z",
        "quote": {
            "USD": {
                "price": 0.00081409221853,
                "volume_24h": 1936702.32253751,
                "volume_change_24h": -17.598,
                "percent_change_1h": -1.07146783,
                "percent_change_24h": -0.24269586,
                "percent_change_7d": -50.13626366,
                "percent_change_30d": 57.54950521,
                "percent_change_60d": -4.24242732,
                "percent_change_90d": 96.33148305,
                "market_cap": 0,
                "market_cap_dominance": 0.0003,
                "fully_diluted_market_cap": 81409221.85,
                "last_updated": "2021-10-31T16:23:05.000Z"
            }
        }
    },
    {
        "id": 10937,
        "name": "SafeCap Token",
        "symbol": "SFC",
        "slug": "safecap-token",
        "num_market_pairs": 5,
        "date_added": "2021-07-17T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 100000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x6bbf411a9a50ef4427d64d1ea74ad294c2bbb0c8"
        },
        "cmc_rank": 3375,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.00449027240118,
                "volume_24h": 590887.59466889,
                "volume_change_24h": 6.3792,
                "percent_change_1h": 1.19080555,
                "percent_change_24h": -11.1743015,
                "percent_change_7d": 18.0630032,
                "percent_change_30d": 359.87501394,
                "percent_change_60d": 40.31421652,
                "percent_change_90d": -60.11092738,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 449027.24,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    },
    {
        "id": 10469,
        "name": "iMe Lab",
        "symbol": "LIME",
        "slug": "ime-lab",
        "num_market_pairs": 6,
        "date_added": "2021-06-16T00:00:00.000Z",
        "tags": [
            "communications-social-media",
            "defi",
            "payments",
            "wallet",
            "ethereum",
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0x9d0b65a76274645b29e4cc41b8f23081fa09f4a3"
        },
        "cmc_rank": 3475,
        "last_updated": "2021-10-31T16:23:04.000Z",
        "quote": {
            "USD": {
                "price": 0.00958879371986,
                "volume_24h": 449290.29727103,
                "volume_change_24h": 3.6153,
                "percent_change_1h": -0.58220948,
                "percent_change_24h": 3.00939694,
                "percent_change_7d": -12.43153748,
                "percent_change_30d": -20.45459501,
                "percent_change_60d": -49.50394425,
                "percent_change_90d": -44.77084417,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 9588793.72,
                "last_updated": "2021-10-31T16:23:04.000Z"
            }
        }
    },
    {
        "id": 11169,
        "name": "DogemonGo",
        "symbol": "DOGO",
        "slug": "dogemon-go",
        "num_market_pairs": 3,
        "date_added": "2021-08-05T00:00:00.000Z",
        "tags": [
            "memes",
            "binance-smart-chain",
            "doggone-doggerel",
            "play-to-earn"
        ],
        "max_supply": null,
        "circulating_supply": 0,
        "total_supply": 100000000000,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x9e6b3e35c8f563b45d864f9ff697a144ad28a371"
        },
        "cmc_rank": 3487,
        "last_updated": "2021-10-31T16:22:10.000Z",
        "quote": {
            "USD": {
                "price": 0.00010446440136,
                "volume_24h": 439096.42905959,
                "volume_change_24h": -46.9606,
                "percent_change_1h": -0.3234772,
                "percent_change_24h": -9.65426704,
                "percent_change_7d": 47.58183153,
                "percent_change_30d": 175.411304,
                "percent_change_60d": -14.86080573,
                "percent_change_90d": 0,
                "market_cap": 0,
                "market_cap_dominance": 0.0004,
                "fully_diluted_market_cap": 10446440.14,
                "last_updated": "2021-10-31T16:22:10.000Z"
            }
        }
    },
    {
        "id": 10201,
        "name": "BitBook",
        "symbol": "BBT",
        "slug": "bitbook",
        "num_market_pairs": 4,
        "date_added": "2021-06-01T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 400000000,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xd48474e7444727bf500a32d5abe01943f3a59a64"
        },
        "cmc_rank": 3592,
        "last_updated": "2021-10-31T16:22:09.000Z",
        "quote": {
            "USD": {
                "price": 0.00806954519911,
                "volume_24h": 340776.61749503,
                "volume_change_24h": 100.276,
                "percent_change_1h": -0.12115243,
                "percent_change_24h": 3.94761615,
                "percent_change_7d": -5.78535503,
                "percent_change_30d": -28.1308455,
                "percent_change_60d": -37.24330386,
                "percent_change_90d": -33.20170032,
                "market_cap": 0,
                "market_cap_dominance": 0.0001,
                "fully_diluted_market_cap": 8069545.2,
                "last_updated": "2021-10-31T16:22:09.000Z"
            }
        }
    },
    {
        "id": 7126,
        "name": "Giftedhands",
        "symbol": "GHD",
        "slug": "giftedhands",
        "num_market_pairs": 16,
        "date_added": "2020-11-02T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 0,
        "total_supply": 200000000,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0x3b544e6fcf6c8dce9d8b45a4fdf21c9b02f9fda9"
        },
        "cmc_rank": 3710,
        "last_updated": "2021-10-31T16:22:09.000Z",
        "quote": {
            "USD": {
                "price": 0.0014846588428,
                "volume_24h": 257404.95190744,
                "volume_change_24h": -27.4199,
                "percent_change_1h": -5.74650426,
                "percent_change_24h": -3.93977373,
                "percent_change_7d": 1.89719618,
                "percent_change_30d": -46.60354553,
                "percent_change_60d": 223.75258429,
                "percent_change_90d": 237.45891064,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 296931.77,
                "last_updated": "2021-10-31T16:22:09.000Z"
            }
        }
    },
    {
        "id": 9055,
        "name": "BerrySwap",
        "symbol": "BERRY",
        "slug": "berryswap",
        "num_market_pairs": 3,
        "date_added": "2021-04-01T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x8626f099434d9a7e603b8f0273880209eabfc1c5"
        },
        "cmc_rank": 3731,
        "last_updated": "2021-10-31T16:22:09.000Z",
        "quote": {
            "USD": {
                "price": 0.00230197142196,
                "volume_24h": 242936.06672751,
                "volume_change_24h": 164.5617,
                "percent_change_1h": 0.0138629,
                "percent_change_24h": 1.50173206,
                "percent_change_7d": 15.18619594,
                "percent_change_30d": 68.54174824,
                "percent_change_60d": 61.86282547,
                "percent_change_90d": 113.56782507,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 0,
                "last_updated": "2021-10-31T16:22:09.000Z"
            }
        }
    },
    {
        "id": 9480,
        "name": "Hope",
        "symbol": "HOPE",
        "slug": "hope-token",
        "num_market_pairs": 1,
        "date_added": "2021-04-28T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x6f2afbf4f5e5e804c5b954889d7bf3768a3c9a45"
        },
        "cmc_rank": 3846,
        "last_updated": "2021-10-31T16:23:04.000Z",
        "quote": {
            "USD": {
                "price": 0.00045237472753,
                "volume_24h": 190036.0784878,
                "volume_change_24h": 35.5776,
                "percent_change_1h": 25.90923696,
                "percent_change_24h": 2.27227238,
                "percent_change_7d": 60.34428886,
                "percent_change_30d": 35.82720467,
                "percent_change_60d": 11.66967623,
                "percent_change_90d": -24.88222394,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 452374.73,
                "last_updated": "2021-10-31T16:23:04.000Z"
            }
        }
    },
    {
        "id": 9981,
        "name": "Weentar",
        "symbol": "$WNTR",
        "slug": "weentar",
        "num_market_pairs": 2,
        "date_added": "2021-05-20T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 900000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x93f63d9455685621aBd73E63cC04f7e454270A66"
        },
        "cmc_rank": 3855,
        "last_updated": "2021-10-31T16:22:08.000Z",
        "quote": {
            "USD": {
                "price": 0.00344685431261,
                "volume_24h": 186231.43280223,
                "volume_change_24h": 17.5727,
                "percent_change_1h": 0.05967948,
                "percent_change_24h": -2.19820467,
                "percent_change_7d": 3.58924841,
                "percent_change_30d": -38.76786799,
                "percent_change_60d": -35.41310664,
                "percent_change_90d": -52.66793282,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 3102168.88,
                "last_updated": "2021-10-31T16:22:08.000Z"
            }
        }
    },
    {
        "id": 10850,
        "name": "CFL 365 Finance",
        "symbol": "CFL365",
        "slug": "cfl-365-finance",
        "num_market_pairs": 2,
        "date_added": "2021-07-12T00:00:00.000Z",
        "tags": [
            "asset-management",
            "defi",
            "binance-smart-chain"
        ],
        "max_supply": 400000000,
        "circulating_supply": 0,
        "total_supply": 400000000,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0xcd6adc6b8bd396e2d53ccd7d7257b4de55be4fbe"
        },
        "cmc_rank": 3948,
        "last_updated": "2021-10-31T16:23:06.000Z",
        "quote": {
            "USD": {
                "price": 0.00210172924068,
                "volume_24h": 156609.91110876,
                "volume_change_24h": -11.8505,
                "percent_change_1h": -0.00304392,
                "percent_change_24h": 29.17863787,
                "percent_change_7d": -4.50989843,
                "percent_change_30d": -32.82917885,
                "percent_change_60d": -54.25474675,
                "percent_change_90d": 0,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 840691.7,
                "last_updated": "2021-10-31T16:23:06.000Z"
            }
        }
    },
    {
        "id": 9951,
        "name": "WaultSwap",
        "symbol": "WEX",
        "slug": "waultswap",
        "num_market_pairs": 8,
        "date_added": "2021-05-19T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 0,
        "total_supply": 2032344789,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90"
        },
        "cmc_rank": 3964,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.00129877891679,
                "volume_24h": 150681.74406235,
                "volume_change_24h": -14.1194,
                "percent_change_1h": -0.21326846,
                "percent_change_24h": 1.2423484,
                "percent_change_7d": 6.42903487,
                "percent_change_30d": -29.41497373,
                "percent_change_60d": -63.58802716,
                "percent_change_90d": -88.83963801,
                "market_cap": 0,
                "market_cap_dominance": 0.0001,
                "fully_diluted_market_cap": 2639566.56,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    },
    {
        "id": 9355,
        "name": "DoveSwap Finance",
        "symbol": "DOVE",
        "slug": "doveswap-finance",
        "num_market_pairs": 3,
        "date_added": "2021-04-20T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 100000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x2Bf56908B0f2440Ad11169d281967EB76665F8c6"
        },
        "cmc_rank": 4008,
        "last_updated": "2021-10-31T16:23:03.000Z",
        "quote": {
            "USD": {
                "price": 0.00460745968397,
                "volume_24h": 137731.65659226,
                "volume_change_24h": 14.5537,
                "percent_change_1h": 14.83941276,
                "percent_change_24h": 13.04843948,
                "percent_change_7d": 12.75138264,
                "percent_change_30d": 2.69395399,
                "percent_change_60d": -53.3181206,
                "percent_change_90d": -42.62842747,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 460745.97,
                "last_updated": "2021-10-31T16:23:03.000Z"
            }
        }
    },
    {
        "id": 9796,
        "name": "Bakery Tools",
        "symbol": "TBAKE",
        "slug": "bakery-tools",
        "num_market_pairs": 2,
        "date_added": "2021-05-14T00:00:00.000Z",
        "tags": [
            "services",
            "dapp",
            "binance-smart-chain"
        ],
        "max_supply": 96000000,
        "circulating_supply": 0,
        "total_supply": 96000000,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x26d6e280f9687c463420908740ae59f712419147"
        },
        "cmc_rank": 4123,
        "last_updated": "2021-10-31T16:23:06.000Z",
        "quote": {
            "USD": {
                "price": 0.00749093895987,
                "volume_24h": 112732.50136979,
                "volume_change_24h": 2853.2897,
                "percent_change_1h": -1.81082692,
                "percent_change_24h": 89.39457179,
                "percent_change_7d": 94.78605874,
                "percent_change_30d": 98.58902961,
                "percent_change_60d": -2.41142193,
                "percent_change_90d": -6.07078001,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 719130.14,
                "last_updated": "2021-10-31T16:23:06.000Z"
            }
        }
    },
    {
        "id": 9759,
        "name": "BSC Gold",
        "symbol": "BSCGOLD",
        "slug": "bsc-gold",
        "num_market_pairs": 3,
        "date_added": "2021-05-13T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x34195fd824355aec1bdceea97697b35be691bcb3"
        },
        "cmc_rank": 4139,
        "last_updated": "2021-10-31T16:23:06.000Z",
        "quote": {
            "USD": {
                "price": 0.00090148521753,
                "volume_24h": 111163.9670638,
                "volume_change_24h": 17.1765,
                "percent_change_1h": -11.11109101,
                "percent_change_24h": 3.76049313,
                "percent_change_7d": 24.72105601,
                "percent_change_30d": 753.62965854,
                "percent_change_60d": 198.54658219,
                "percent_change_90d": 143.93976171,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 901485.22,
                "last_updated": "2021-10-31T16:23:06.000Z"
            }
        }
    },
    {
        "id": 9065,
        "name": "Realfinance Network",
        "symbol": "REFI",
        "slug": "realfinance-network",
        "num_market_pairs": 4,
        "date_added": "2021-04-01T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 100000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x641a6dc991a49f7be9fe3c72c5d0fbb223edb12f"
        },
        "cmc_rank": 4163,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.00396896671659,
                "volume_24h": 104546.81623982,
                "volume_change_24h": 18.2477,
                "percent_change_1h": -0.03401887,
                "percent_change_24h": 5.6636719,
                "percent_change_7d": 8.58998534,
                "percent_change_30d": 18.12299349,
                "percent_change_60d": -23.56759278,
                "percent_change_90d": -15.72431378,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 396896.67,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    },
    {
        "id": 9925,
        "name": "Pampther",
        "symbol": "PAMPTHER",
        "slug": "pampther",
        "num_market_pairs": 2,
        "date_added": "2021-06-21T00:00:00.000Z",
        "tags": [
            "philanthropy",
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 827929179.7317141,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xaf6f4e5430f6739f85a1863434a17b9fcd4322b4"
        },
        "cmc_rank": 4173,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.00035976082394,
                "volume_24h": 101841.08170241,
                "volume_change_24h": -31.8742,
                "percent_change_1h": 4.06155441,
                "percent_change_24h": 2.99153896,
                "percent_change_7d": -18.49308511,
                "percent_change_30d": -42.56494112,
                "percent_change_60d": 63.79935683,
                "percent_change_90d": 81.01013963,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 359760.82,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    },
    {
        "id": 10161,
        "name": "OptionPanda",
        "symbol": "OPA",
        "slug": "option-panda",
        "num_market_pairs": 2,
        "date_added": "2021-05-30T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 500000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xA2F89a3be1bAda5Eb9D58D23EDc2E2FE0F82F4b0"
        },
        "cmc_rank": 4223,
        "last_updated": "2021-10-31T16:22:09.000Z",
        "quote": {
            "USD": {
                "price": 0.00585005904518,
                "volume_24h": 93541.1368139,
                "volume_change_24h": -74.6534,
                "percent_change_1h": 1.2414855,
                "percent_change_24h": -10.21222024,
                "percent_change_7d": 31.28098842,
                "percent_change_30d": 52.50939613,
                "percent_change_60d": -29.65790095,
                "percent_change_90d": -39.33995051,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 2925029.52,
                "last_updated": "2021-10-31T16:22:09.000Z"
            }
        }
    },
    {
        "id": 11083,
        "name": "TripCandy",
        "symbol": "CANDY",
        "slug": "tripcandy",
        "num_market_pairs": 2,
        "date_added": "2021-07-28T00:00:00.000Z",
        "tags": [
            "hospitality",
            "binance-smart-chain",
            "tourism"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x639AD7c49EC616a64e074c21a58608C0d843A8a3"
        },
        "cmc_rank": 4263,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.0080342659097,
                "volume_24h": 84860.77129789,
                "volume_change_24h": -9.0627,
                "percent_change_1h": 0.08072604,
                "percent_change_24h": -1.53728967,
                "percent_change_7d": 12.79537537,
                "percent_change_30d": 10.40499424,
                "percent_change_60d": -4.84203864,
                "percent_change_90d": -5.96003385,
                "market_cap": 0,
                "market_cap_dominance": 0.0001,
                "fully_diluted_market_cap": 8034265.91,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    },
    {
        "id": 9139,
        "name": "Yetucoin",
        "symbol": "YETU",
        "slug": "yetucoin",
        "num_market_pairs": 1,
        "date_added": "2021-04-06T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 300000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x6652048fa5e66ed63a0225ffd7c82e106b0aa18b"
        },
        "cmc_rank": 4301,
        "last_updated": "2021-10-31T16:22:09.000Z",
        "quote": {
            "USD": {
                "price": 0.00902247382446,
                "volume_24h": 80969.62874885,
                "volume_change_24h": -1.5531,
                "percent_change_1h": -2.47422727,
                "percent_change_24h": -1.50998231,
                "percent_change_7d": -17.83007266,
                "percent_change_30d": -25.76492976,
                "percent_change_60d": -41.50801416,
                "percent_change_90d": -54.90587841,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 2706742.15,
                "last_updated": "2021-10-31T16:22:09.000Z"
            }
        }
    },
    {
        "id": 13040,
        "name": "Dopple Finance",
        "symbol": "DOPX",
        "slug": "dopple-finance-",
        "num_market_pairs": 1,
        "date_added": "2021-10-23T11:45:40.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 100000000,
        "circulating_supply": 0,
        "total_supply": 62370076,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x802a183ac9f6b082716dfee55432ed0c04acb49a"
        },
        "cmc_rank": 4341,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.00416884999259,
                "volume_24h": 75570.49061749,
                "volume_change_24h": 19.1041,
                "percent_change_1h": -3.72842276,
                "percent_change_24h": -15.34424607,
                "percent_change_7d": -73.55135828,
                "percent_change_30d": 0,
                "percent_change_60d": 0,
                "percent_change_90d": 0,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 416885,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    },
    {
        "id": 10706,
        "name": "peachfolio",
        "symbol": "PCHF",
        "slug": "peachfolio",
        "num_market_pairs": 1,
        "date_added": "2021-06-29T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xc1cbfb96a1d5361590b8df04ef78de2fa3178390"
        },
        "cmc_rank": 4422,
        "last_updated": "2021-10-31T16:23:06.000Z",
        "quote": {
            "USD": {
                "price": 0.00319664016176,
                "volume_24h": 65119.32185575,
                "volume_change_24h": -0.5172,
                "percent_change_1h": -0.05460269,
                "percent_change_24h": 0.95878751,
                "percent_change_7d": -6.80302263,
                "percent_change_30d": 69.87855342,
                "percent_change_60d": 29.72107553,
                "percent_change_90d": 27.3879765,
                "market_cap": 0,
                "market_cap_dominance": 0.0001,
                "fully_diluted_market_cap": 3196640.16,
                "last_updated": "2021-10-31T16:23:06.000Z"
            }
        }
    },
    {
        "id": 11505,
        "name": "Pet Games",
        "symbol": "PETG",
        "slug": "pet-games",
        "num_market_pairs": 2,
        "date_added": "2021-08-31T06:48:59.000Z",
        "tags": [
            "binance-smart-chain",
            "play-to-earn"
        ],
        "max_supply": null,
        "circulating_supply": 0,
        "total_supply": 1250000000,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x09607078980cbb0665aba9c6d1b84b8ead246aa0"
        },
        "cmc_rank": 4533,
        "last_updated": "2021-10-31T16:23:04.000Z",
        "quote": {
            "USD": {
                "price": 0.00014324080973,
                "volume_24h": 51699.45614792,
                "volume_change_24h": 12.5101,
                "percent_change_1h": -0.34231625,
                "percent_change_24h": -12.75759735,
                "percent_change_7d": 2.39938474,
                "percent_change_30d": 0.49618844,
                "percent_change_60d": -96.80026485,
                "percent_change_90d": 0,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 179051.01,
                "last_updated": "2021-10-31T16:23:04.000Z"
            }
        }
    },
    {
        "id": 9138,
        "name": "PhoenixDefi.Finance",
        "symbol": "PNIX",
        "slug": "phoenixdefi-finance",
        "num_market_pairs": 4,
        "date_added": "2021-04-06T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 48661181,
        "circulating_supply": 0,
        "total_supply": 48661181,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xc25D94fc3f8D7bD1d88f89802fe075338F71dEC7"
        },
        "cmc_rank": 4556,
        "last_updated": "2021-10-31T16:22:09.000Z",
        "quote": {
            "USD": {
                "price": 0.00659800694915,
                "volume_24h": 49932.39599152,
                "volume_change_24h": 50.9481,
                "percent_change_1h": -0.56574966,
                "percent_change_24h": -1.26821671,
                "percent_change_7d": -6.04108027,
                "percent_change_30d": 6.28796489,
                "percent_change_60d": -8.30556675,
                "percent_change_90d": -32.838697,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 321066.81,
                "last_updated": "2021-10-31T16:22:09.000Z"
            }
        }
    },
    {
        "id": 8394,
        "name": "Anime Token",
        "symbol": "ANI",
        "slug": "anime-token",
        "num_market_pairs": 4,
        "date_added": "2021-02-04T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 69000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xac472d0eed2b8a2f57a6e304ea7ebd8e88d1d36f"
        },
        "cmc_rank": 4602,
        "last_updated": "2021-10-31T16:23:04.000Z",
        "quote": {
            "USD": {
                "price": 0.00419734089229,
                "volume_24h": 44707.49597289,
                "volume_change_24h": -21.9198,
                "percent_change_1h": 0.12864296,
                "percent_change_24h": -0.86597321,
                "percent_change_7d": 12.83876497,
                "percent_change_30d": 49.23727809,
                "percent_change_60d": -14.4428344,
                "percent_change_90d": -17.46929148,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 289616.52,
                "last_updated": "2021-10-31T16:23:04.000Z"
            }
        }
    },
    {
        "id": 8518,
        "name": "Chickenkebab Finance",
        "symbol": "CHIK",
        "slug": "chickenkebab-finance",
        "num_market_pairs": 5,
        "date_added": "2021-02-18T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x893411cacf9e62a744d9fc0f72f7fb1b1373b6cd"
        },
        "cmc_rank": 4636,
        "last_updated": "2021-10-31T16:23:04.000Z",
        "quote": {
            "USD": {
                "price": 0.00446820263397,
                "volume_24h": 41124.15186438,
                "volume_change_24h": 120.5484,
                "percent_change_1h": 3.01036383,
                "percent_change_24h": 1.68151192,
                "percent_change_7d": -11.43606523,
                "percent_change_30d": 34.60375314,
                "percent_change_60d": 4.4928725,
                "percent_change_90d": -24.951565,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 4468.2,
                "last_updated": "2021-10-31T16:23:04.000Z"
            }
        }
    },
    {
        "id": 9271,
        "name": "Momo Protocol",
        "symbol": "MOMO",
        "slug": "momo-protocol",
        "num_market_pairs": 4,
        "date_added": "2021-04-18T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 13359549,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xafb2997fe9a99022e61c7e01b974e0e3d7704b02"
        },
        "cmc_rank": 4644,
        "last_updated": "2021-10-31T16:23:03.000Z",
        "quote": {
            "USD": {
                "price": 0.00894711747121,
                "volume_24h": 40293.70817262,
                "volume_change_24h": -3.7352,
                "percent_change_1h": 35.42020755,
                "percent_change_24h": -6.0819267,
                "percent_change_7d": 7.25856504,
                "percent_change_30d": -27.66202334,
                "percent_change_60d": -12.96691641,
                "percent_change_90d": 121.93860077,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 119529.45,
                "last_updated": "2021-10-31T16:23:03.000Z"
            }
        }
    },
    {
        "id": 9802,
        "name": "Mozik",
        "symbol": "MOZ",
        "slug": "mozik",
        "num_market_pairs": 3,
        "date_added": "2021-05-14T00:00:00.000Z",
        "tags": [
            "binance-smart-chain",
            "genpad"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0x7BD82B320EbC28D8EB3C4F5Fa2af7B14dA5b90C3"
        },
        "cmc_rank": 4664,
        "last_updated": "2021-10-31T16:23:06.000Z",
        "quote": {
            "USD": {
                "price": 0.00540642280238,
                "volume_24h": 38257.39541545,
                "volume_change_24h": -11.8909,
                "percent_change_1h": 1.04717076,
                "percent_change_24h": 8.73449752,
                "percent_change_7d": 4.24578184,
                "percent_change_30d": -1.71693746,
                "percent_change_60d": -63.32978938,
                "percent_change_90d": -17.64443053,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 5406422.8,
                "last_updated": "2021-10-31T16:23:06.000Z"
            }
        }
    },
    {
        "id": 10151,
        "name": "Foliowatch",
        "symbol": "FWATCH",
        "slug": "foliowatch",
        "num_market_pairs": 2,
        "date_added": "2021-05-29T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 200000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x5CdCB6C1A30F59D59393D1629172634056E0461C"
        },
        "cmc_rank": 4711,
        "last_updated": "2021-10-31T16:22:10.000Z",
        "quote": {
            "USD": {
                "price": 0.00051059649145,
                "volume_24h": 35169.26165116,
                "volume_change_24h": 76.9759,
                "percent_change_1h": 1.14244413,
                "percent_change_24h": 10.63924205,
                "percent_change_7d": 28.90953562,
                "percent_change_30d": -23.99981877,
                "percent_change_60d": -51.11977847,
                "percent_change_90d": -67.49672938,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 102119.3,
                "last_updated": "2021-10-31T16:22:10.000Z"
            }
        }
    },
    {
        "id": 10089,
        "name": "Fire Token",
        "symbol": "FIRE",
        "slug": "fire-token",
        "num_market_pairs": 1,
        "date_added": "2021-05-27T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xbacbf768795c50fc5e877830a127276741651d0a"
        },
        "cmc_rank": 4735,
        "last_updated": "2021-10-31T16:22:08.000Z",
        "quote": {
            "USD": {
                "price": 0.00059148996453,
                "volume_24h": 34196.04662525,
                "volume_change_24h": 96.2728,
                "percent_change_1h": 5.53902061,
                "percent_change_24h": 0.34914236,
                "percent_change_7d": 24.99079804,
                "percent_change_30d": 74.4413354,
                "percent_change_60d": -49.56322407,
                "percent_change_90d": -65.24613237,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 591489.96,
                "last_updated": "2021-10-31T16:22:08.000Z"
            }
        }
    },
    {
        "id": 10684,
        "name": "Tiki Token",
        "symbol": "TIKI",
        "slug": "tiki-token",
        "num_market_pairs": 1,
        "date_added": "2021-06-27T00:00:00.000Z",
        "tags": [
            "defi",
            "memes",
            "yield-farming",
            "binance-smart-chain",
            "yield-aggregator"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x9b76D1B12Ff738c113200EB043350022EBf12Ff0"
        },
        "cmc_rank": 4747,
        "last_updated": "2021-10-31T16:23:05.000Z",
        "quote": {
            "USD": {
                "price": 0.00333623288905,
                "volume_24h": 33342.88976437,
                "volume_change_24h": -14.7927,
                "percent_change_1h": -0.32695395,
                "percent_change_24h": -1.93738634,
                "percent_change_7d": -4.79555138,
                "percent_change_30d": 38.06234691,
                "percent_change_60d": -19.53843724,
                "percent_change_90d": -33.63171457,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 3336232.89,
                "last_updated": "2021-10-31T16:23:05.000Z"
            }
        }
    },
    {
        "id": 9705,
        "name": "GOAT Zuckerberg",
        "symbol": "ZGOAT",
        "slug": "goat-zuckerberg",
        "num_market_pairs": 1,
        "date_added": "2021-05-11T00:00:00.000Z",
        "tags": [
            "memes",
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 500000000,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x2cbd87ce69a40ac91378eb8844ef45115a6a5617"
        },
        "cmc_rank": 4780,
        "last_updated": "2021-10-31T16:23:06.000Z",
        "quote": {
            "USD": {
                "price": 0.00053499300173,
                "volume_24h": 31790.35055996,
                "volume_change_24h": 8982.2475,
                "percent_change_1h": 14.67757087,
                "percent_change_24h": 150.1654993,
                "percent_change_7d": 165.32705721,
                "percent_change_30d": 181.24506015,
                "percent_change_60d": 162.93253791,
                "percent_change_90d": 190.15772132,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 534993,
                "last_updated": "2021-10-31T16:23:06.000Z"
            }
        }
    },
    {
        "id": 11201,
        "name": "Alpha Kombat",
        "symbol": "ALKOM",
        "slug": "alpha-kombat",
        "num_market_pairs": 1,
        "date_added": "2021-08-09T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x8379b36826675450c35e1eb45d2fd1e1ae8494a4"
        },
        "cmc_rank": 4782,
        "last_updated": "2021-10-31T16:22:08.000Z",
        "quote": {
            "USD": {
                "price": 0.00088047073232,
                "volume_24h": 31758.26228579,
                "volume_change_24h": -23.2645,
                "percent_change_1h": 2.26025961,
                "percent_change_24h": 21.46190799,
                "percent_change_7d": 20.44535376,
                "percent_change_30d": -21.42663008,
                "percent_change_60d": -44.97759082,
                "percent_change_90d": 0,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 880470.73,
                "last_updated": "2021-10-31T16:22:08.000Z"
            }
        }
    },
    {
        "id": 9063,
        "name": "Tcake",
        "symbol": "TCAKE",
        "slug": "pancaketools",
        "num_market_pairs": 2,
        "date_added": "2021-04-01T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 200000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x3b831d36ed418e893f42d46ff308c326c239429f"
        },
        "cmc_rank": 4788,
        "last_updated": "2021-10-31T16:23:08.000Z",
        "quote": {
            "USD": {
                "price": 0.00421296600371,
                "volume_24h": 31424.48695459,
                "volume_change_24h": -45.2954,
                "percent_change_1h": -0.56999771,
                "percent_change_24h": -2.96263843,
                "percent_change_7d": -1.03730645,
                "percent_change_30d": 5.84405753,
                "percent_change_60d": -36.47778463,
                "percent_change_90d": -35.39287049,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 842593.2,
                "last_updated": "2021-10-31T16:23:08.000Z"
            }
        }
    },
    {
        "id": 10471,
        "name": "Bitcoin Networks",
        "symbol": "BTCN",
        "slug": "bitcoin-networks",
        "num_market_pairs": 2,
        "date_added": "2021-06-16T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 21000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x646b8470feA7c413DaC19F41b5c97328EBF70De4"
        },
        "cmc_rank": 4793,
        "last_updated": "2021-10-31T16:23:04.000Z",
        "quote": {
            "USD": {
                "price": 0.00253959975232,
                "volume_24h": 30974.18606091,
                "volume_change_24h": -40.8592,
                "percent_change_1h": 3.33086556,
                "percent_change_24h": -5.12324336,
                "percent_change_7d": 1.51204234,
                "percent_change_30d": -17.07324076,
                "percent_change_60d": -36.27426064,
                "percent_change_90d": -99.36422523,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 53331.59,
                "last_updated": "2021-10-31T16:23:04.000Z"
            }
        }
    },
    {
        "id": 9799,
        "name": "SafeZone",
        "symbol": "SAFEZONE",
        "slug": "safezone",
        "num_market_pairs": 1,
        "date_added": "2021-05-14T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 970168275.927207,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x10f181b87e2a4af6120452a29570fcf74b082c16"
        },
        "cmc_rank": 4807,
        "last_updated": "2021-10-31T16:23:06.000Z",
        "quote": {
            "USD": {
                "price": 0.00051942736948,
                "volume_24h": 30392.25688943,
                "volume_change_24h": 73.3449,
                "percent_change_1h": -2.81194718,
                "percent_change_24h": -3.34320637,
                "percent_change_7d": 34.85540874,
                "percent_change_30d": 237.23820628,
                "percent_change_60d": 38.91846087,
                "percent_change_90d": 26.64430663,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 519427.37,
                "last_updated": "2021-10-31T16:23:06.000Z"
            }
        }
    },
    {
        "id": 10829,
        "name": "NEFTiPEDiA",
        "symbol": "NFT",
        "slug": "neftipedia",
        "num_market_pairs": 3,
        "date_added": "2021-07-10T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 750000000,
        "circulating_supply": 0,
        "total_supply": 750000000,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xfaab744db9def8e13194600ed02bc5d5bed3b85c"
        },
        "cmc_rank": 4819,
        "last_updated": "2021-10-31T16:23:06.000Z",
        "quote": {
            "USD": {
                "price": 0.00628989124428,
                "volume_24h": 29649.31054872,
                "volume_change_24h": -13.4407,
                "percent_change_1h": -3.04327714,
                "percent_change_24h": -8.9416052,
                "percent_change_7d": -21.99443043,
                "percent_change_30d": 37.75540191,
                "percent_change_60d": -5.95132968,
                "percent_change_90d": -27.62097092,
                "market_cap": 0,
                "market_cap_dominance": 0.0001,
                "fully_diluted_market_cap": 4717418.43,
                "last_updated": "2021-10-31T16:23:06.000Z"
            }
        }
    },
    {
        "id": 9976,
        "name": "Freela",
        "symbol": "FREL",
        "slug": "freela",
        "num_market_pairs": 2,
        "date_added": "2021-05-20T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0x29ceddcf0da3c1d8068a7dfbd0fb06c2e438ff70"
        },
        "cmc_rank": 4921,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.00519827698862,
                "volume_24h": 23285.83252056,
                "volume_change_24h": -3.0005,
                "percent_change_1h": -0.00304392,
                "percent_change_24h": -0.92561167,
                "percent_change_7d": -2.14812191,
                "percent_change_30d": 8.79374384,
                "percent_change_60d": -40.10946093,
                "percent_change_90d": 25.85542094,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 5198276.99,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    },
    {
        "id": 9124,
        "name": "Manyswap",
        "symbol": "MANY",
        "slug": "manyswap",
        "num_market_pairs": 2,
        "date_added": "2021-04-06T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 10000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0x2dd6c9c5bcd16816226542688788932c6e79a600"
        },
        "cmc_rank": 4958,
        "last_updated": "2021-10-31T16:22:08.000Z",
        "quote": {
            "USD": {
                "price": 0.00619949141846,
                "volume_24h": 21418.39428378,
                "volume_change_24h": 0.9036,
                "percent_change_1h": 71.42354211,
                "percent_change_24h": -3.84215146,
                "percent_change_7d": -18.37056362,
                "percent_change_30d": -40.99604424,
                "percent_change_60d": -66.37519894,
                "percent_change_90d": -58.15662044,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 61994.91,
                "last_updated": "2021-10-31T16:22:08.000Z"
            }
        }
    },
    {
        "id": 10815,
        "name": "Vacay",
        "symbol": "VACAY",
        "slug": "vacay",
        "num_market_pairs": 1,
        "date_added": "2021-07-10T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xa3424fb48b9fa2ff8d3366ed91f36b4cda7cadd8"
        },
        "cmc_rank": 4959,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.00748128505603,
                "volume_24h": 21351.02742562,
                "volume_change_24h": 0,
                "percent_change_1h": 0.33633111,
                "percent_change_24h": 0.82176224,
                "percent_change_7d": 58.01149589,
                "percent_change_30d": 96.58959521,
                "percent_change_60d": 86.27805839,
                "percent_change_90d": 207.57765927,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 7481285.06,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    },
    {
        "id": 11047,
        "name": "GameX",
        "symbol": "GMX",
        "slug": "gamex",
        "num_market_pairs": 2,
        "date_added": "2021-07-24T00:00:00.000Z",
        "tags": [
            "binance-smart-chain"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 0,
        "total_supply": 0,
        "platform": {
            "id": 1839,
            "name": "Binance Smart Chain (BEP20)",
            "symbol": "BNB",
            "slug": "binance-coin",
            "token_address": "0xc62ef0d8e137499833abb05dee47007d2b334ba6"
        },
        "cmc_rank": 4966,
        "last_updated": "2021-10-31T16:23:07.000Z",
        "quote": {
            "USD": {
                "price": 0.00060914614732,
                "volume_24h": 21140.35247471,
                "volume_change_24h": -25.2451,
                "percent_change_1h": -1.1939959,
                "percent_change_24h": -9.38496804,
                "percent_change_7d": -22.58009822,
                "percent_change_30d": -30.24195613,
                "percent_change_60d": -43.68789517,
                "percent_change_90d": 0,
                "market_cap": 0,
                "market_cap_dominance": 0,
                "fully_diluted_market_cap": 609146.15,
                "last_updated": "2021-10-31T16:23:07.000Z"
            }
        }
    }
]

res.json(staticCrypto)

});

app.get('/report', (req, res) => {
  res.sendFile(__dirname + '/public/report.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
