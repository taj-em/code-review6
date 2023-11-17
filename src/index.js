import ExchangeRate from "./calculate";

function getRate(currency, amount) {
  ExchangeRate.getRate(currency, amount)
    .then(function(response) {
      if (response) {
        printElements(response, amount);
      } else {
        printError(response, currency);
      }
    });
}

function printElements(response, newAmount) {
  document.querySelector('#showResponse').innerText = `"Response: ${response}, Converted Amount: ${newAmount}`;
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