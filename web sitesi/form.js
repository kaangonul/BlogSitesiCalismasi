document.getElementById("temas").addEventListener("submit", function (e) {
  e.preventDefault();

  const telefonInput = document.getElementById("telefon").value.trim();
  const errorMessage = document.getElementById("error-message");
  const alertUyarı = document.getElementById("alertUyar");

  if (telefonInput.length !== 10 || isNaN(telefonInput)) {
    errorMessage.textContent = "Lütfen 10 haneli bir telefon numarası giriniz.";
    alertUyarı.style.display = "none";
  } else {
    errorMessage.textContent = "";
    alertUyarı.style.display = "block";
  }
});
