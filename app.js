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

rupee.addEventListener("keyup", () => {
  dollar.addEventListener("click", function () {
    document.querySelector("#output").value = rupee.value / 64;
  });
  euro.addEventListener("click", function () {
    document.querySelector("#output").value = rupee.value * 0.011;
  });
  dinar.addEventListener("click", function () {
    document.querySelector("#output").value = rupee.value * 0.004;
  });
  pound.addEventListener("click", function () {
    document.querySelector("#output").value = rupee.value * 0.0097;
  });
  bitcoin.addEventListener("click", function () {
    document.querySelector("#output").value = (rupee.value * 0.000032) / 100;
  });
  rubel.addEventListener("click", function () {
    document.querySelector("#output").value = rupee.value * 0.98;
  });
  ausDollar.addEventListener("click", function () {
    document.querySelector("#output").value = rupee.value * 0.018;
  });
  canDollar.addEventListener("click", function () {
    document.querySelector("#output").value = rupee.value * 0.017;
  });
  yen.addEventListener("click", function () {
    document.querySelector("#output").value = rupee.value * 1.47;
  });
});
