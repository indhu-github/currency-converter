var rupee = document.getElementById("rupees");
var output = document.getElementById("output");
var dollar = document.getElementById("dollar");
var euro = document.getElementById("euro");
var dinar = document.getElementById("dinar");
var pound = document.getElementById("pound");
var bitcoin = document.getElementById("bitcoin");
var rubel = document.getElementById("rubel");
var ausDollar = document.getElementById("ausDollar");
var canDollar = document.getElementById("canDollar");
var yen = document.getElementById("yen");

//Using multiple click event listeners
/*rupee.addEventListener("keyup", () => {
  dollar.addEventListener("click", function () {
    document.querySelector("#output").value = parseFloat(
      rupee.value / 64
    ).toFixed(2);
  });
  euro.addEventListener("click", function () {
    document.querySelector("#output").value = parseFloat(
      rupee.value * 0.011
    ).toFixed(2);
  });
  dinar.addEventListener("click", function () {
    document.querySelector("#output").value = parseFloat(
      rupee.value * 0.004
    ).toFixed(2);
  });
  pound.addEventListener("click", function () {
    document.querySelector("#output").value = parseFloat(
      rupee.value * 0.0097
    ).toFixed(2);
  });
  bitcoin.addEventListener("click", function () {
    document.querySelector("#output").value = parseFloat(
      (rupee.value * 0.000032) / 100
    ).toFixed(5);
  });
  rubel.addEventListener("click", function () {
    document.querySelector("#output").value = parseFloat(
      rupee.value * 0.98
    ).toFixed(2);
  });
  ausDollar.addEventListener("click", function () {
    document.querySelector("#output").value = parseFloat(
      rupee.value * 0.018
    ).toFixed(2);
  });
  canDollar.addEventListener("click", function () {
    document.querySelector("#output").value = parseFloat(
      rupee.value * 0.017
    ).toFixed(2);
  });
  yen.addEventListener("click", function () {
    document.querySelector("#output").value = parseFloat(
      rupee.value * 1.47
    ).toFixed(2);
  });
});
*/

//Using higher order functions
//single method for all conversions
const convertCurrency = function (converter) {
  output.value = converter(rupee.value);
};

//All the amount converison methods
const convertToUSD = function (inr) {
  return parseFloat(inr / 74.68).toFixed(2);
};

const convertToEuro = function (inr) {
  return parseFloat(rupee.value * 0.011).toFixed(2);
};

const convertToDinar = function (inr) {
  return parseFloat(rupee.value * 0.004).toFixed(2);
};

const convertToPound = function (inr) {
  return parseFloat(rupee.value * 0.0097).toFixed(2);
};

const convertToBitcoin = function (inr) {
  return parseFloat((rupee.value * 0.000032) / 100).toFixed(5);
};

const convertToRubel = function (inr) {
  return parseFloat(rupee.value * 0.98).toFixed(2);
};

const convertToAusDollar = function (inr) {
  return parseFloat(rupee.value * 0.018).toFixed(2);
};

const convertToCanDollar = function (inr) {
  return parseFloat(rupee.value * 0.017).toFixed(2);
};

const convertToYen = function (inr) {
  return parseFloat(rupee.value * 1.47).toFixed(2);
};

//Event Listeners
dollar.addEventListener("click", function () {
  convertCurrency(convertToUSD);
});

euro.addEventListener("click", function () {
  convertCurrency(convertToEuro);
});

dinar.addEventListener("click", function () {
  convertCurrency(convertToDinar);
});

pound.addEventListener("click", function () {
  convertCurrency(convertToPound);
});

bitcoin.addEventListener("click", function () {
  convertCurrency(convertToBitcoin);
});

rubel.addEventListener("click", function () {
  convertCurrency(convertToRubel);
});

ausDollar.addEventListener("click", function () {
  convertCurrency(convertToAusDollar);
});

canDollar.addEventListener("click", function () {
  convertCurrency(convertToCanDollar);
});

yen.addEventListener("click", function () {
  convertCurrency(convertToYen);
});
