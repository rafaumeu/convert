const USD = 5.06
const EUR = 5.10
const GBP = 5.83

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");

amount.addEventListener("input", () => {
  const hasCharctersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharctersRegex, "");
})

form.onsubmit = (event) => {
  event.preventDefault();
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
}

function convertCurrency (amount, price, symbol) {
  try {
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)
    footer.classList.remove("show-result")
    alert("Não foi possível converter. Tente novamente mais tarde.")	
  }
}