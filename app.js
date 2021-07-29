var input = document.getElementById("rupees");
console.log(input.value);
var output = document.getElementById("output");
var dollar = document.getElementById("dollar");

const convertToDollar = function () {
  console.log("uewfcojsdb", input.value);
  return input.value / 64;
};

const convertCurrency = function (currency) {
  const usDollar = convertToDollar(currency);
  document.querySelector(".output").value = usDollar;
};
//dollar.addEventListener("click", convertCurrency(convertToDollar));
input.addEventListener("keyup", convertCurrency);
