export default class ExchangeRate {  
  static getRate() {
    return fetch(`https://v6.exchanm/v6/${process.env.API_KEY}/latest/USD`)
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