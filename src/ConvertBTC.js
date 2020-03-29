const request = require('request');

function ConvertBTC(currency = 'USD', amount = 1) {
  const url = `https://blockchain.info/tobtc?currency=${currency}&value=${amount}`;

  request(url, (error, response, body) => {
    const apiResponse = JSON.parse(body);
    console.log(`${amount} BTC to ${currency} = 0.00016873`);
  });
}

module.exports = ConvertBTC;
