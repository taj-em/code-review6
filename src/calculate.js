export default class ExchangeRate {  
  static async getRate() {
    return fetch(` https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          throw new Error();
        } else {
          return response.json();
        }
      })      
      .catch(function(error) {
        return error;
      });
  }
}