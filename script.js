const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

amount.addEventListener("input", () => {
  const hasCharctersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharctersRegex, "");
})

form.onsubmit = (event) => {
  event.preventDefault();
}