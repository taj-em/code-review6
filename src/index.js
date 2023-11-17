import ExchangeRate from "./calculate";

function getRate(currency, amount) {
  ExchangeRate.getRate(currency, amount)
    .then(function(response) {
      if (response) {
        const conversionRate = response.conversion_rates[currency];
        const newAmount = amount * conversionRate;
        printElements(newAmount.toFixed(2), currency);
      } else {
        printError(response);
      }
    });
}

function printElements(newAmount, currency) {
  document.querySelector('#showResponse').innerText = `New Amount: $${newAmount}, Currency: ${currency}`;
}

function printError(error, currency) {
  document.querySelector('#showResponse').innerText = `Error: ${error}, Currency: ${currency}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('input[name="currency"]:checked').value;
  const amount = document.querySelector("#amount").value;
  getRate(currency, amount);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});