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
const convertCurrency = function (converter, val) {
  output.value = converter(rupee.value, val);
};

//All the amount converison methods
const convert = function (inr, val) {
  return parseFloat(inr * val).toFixed(5);
};

//Event Listeners
dollar.addEventListener("click", function () {
  convertCurrency(convert, 0.013);
});

euro.addEventListener("click", function () {
  convertCurrency(convert, 0.011);
});

dinar.addEventListener("click", function () {
  convertCurrency(convert, 0.004);
});

pound.addEventListener("click", function () {
  convertCurrency(convert, 0.0097);
});

bitcoin.addEventListener("click", function () {
  convertCurrency(convert, 0.000032);
});

rubel.addEventListener("click", function () {
  convertCurrency(convert, 0.98);
});

ausDollar.addEventListener("click", function () {
  convertCurrency(convert, 0.018);
});

canDollar.addEventListener("click", function () {
  convertCurrency(convert, 0.017);
});

yen.addEventListener("click", function () {
  convertCurrency(convert, 1.47);
});
