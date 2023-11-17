export default class ExchangeRate {  
  static getRate(currency, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          const exchangerate = response[0];
          // const newAmount = exchangerate * amount;
          return exchangerate + currency + amount;
        }
      })      
      .catch(function(error) {
        return error;
      });
  }
}