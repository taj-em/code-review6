export default class ExchangeRate {  
  static async getRate() {
    return fetch(` https://v6.exchangerate-api.com/v6/1f9b0da17a2a126b77eb68e1/latest/USD`)
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