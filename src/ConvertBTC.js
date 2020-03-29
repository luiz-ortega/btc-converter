const request = require('request');

function ConvertBTC(currency = 'USD', amount = 1) {
  const url = `https://blockchain.info/tobtc?currency=${currency}&value=${amount}`;

  request(url, (error, response, body) => {
    let apiResponse;

    try {
      apiResponse = JSON.parse(body);
    } catch (parseError) {
      console.log('Something went wrong with api. Try again in a few minutes.');
      return parseError;
    }

    console.log(`${amount} BTC to ${currency} = 0.00016873`);
  });
}

module.exports = ConvertBTC;
