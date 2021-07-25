const input = document.getElementById("rupees");
const output = document.getElementById("output");
const dollar = document.getElementById("dollar");

const convertToDollar = function (prop) {
  console.log(prop);
  console.log(prop / 64);
  return prop / 64;
};

//input.addEventListener("keyup", convertCurrency);

const convertCurrency = function (currency) {
  console.log(input.value);
  const usDollar = currency(input.value);
  console.log(usDollar);
  document.querySelector("#output").value = usDollar;
};
dollar.addEventListener("click", convertCurrency(convertToDollar));
