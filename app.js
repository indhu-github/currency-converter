const input = document.getElementById("rupees");
const output = document.getElementById("output");

const dollar = document.getElementById("dollar");
//input.addEventListener("keyup", convertCurrency);
dollar.addEventListener("click", convertCurrency);

function convertCurrency(e) {
  let usDollar = input.value / 64;
  document.querySelector("#output").value = usDollar;
}
