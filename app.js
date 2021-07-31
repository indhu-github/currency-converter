var rupee = document.getElementById("rupees");
var output = document.getElementById("output");
var dollar = document.getElementById("dollar");
var euro = document.getElementById("euro");

rupee.addEventListener("keyup", () => {
  dollar.addEventListener("click", function () {
    document.querySelector("#output").value = rupee.value / 64;
  });
  euro.addEventListener("click", function () {
    document.querySelector("#output").value = rupee.value / 32;
  });
});
