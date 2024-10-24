const amount = document.getElementById("amount");

amount.addEventListener("input", () => {
  const hasCharctersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharctersRegex, "");
})
