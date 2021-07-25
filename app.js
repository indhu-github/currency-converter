const input = document.getElementById("rupees");
const output = document.getElementById("output");

input.addEventListener("keyup", convertCurrency);

function convertCurrency(e) {
  let usDollar = e.target.value / 64;
  console.log(usDollar);
  document.querySelector("#output").value = usDollar;
  console.log(output);
}
