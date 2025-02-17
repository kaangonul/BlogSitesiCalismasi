let sepet = [];

function sepeteEkle(urunFiyati, urunIsmi) {
  sepet.push({ isim: urunIsmi, fiyat: urunFiyati });
  uyelikKontrol();
}

function uyelikKontrol() {
  let uyeMi = confirm(
    "Mağaza üyesi misiniz? Üyeyseniz %20 indirim kazanacaksınız!"
  );

  if (uyeMi) {
    sepet = sepet.map((urun) => {
      urun.fiyat = urun.fiyat * 0.8;
      return urun;
    });
    alert("Üyeliğiniz onaylandı, indirim uygulandı!");
  } else {
    alert("Üyelik olmadığından indirim uygulanmadı.");
  }

  sepetGoster();
}

function sepetGoster() {
  let sepetIcerigi = document.getElementById("sepetIcerigi");
  let toplamFiyatDiv = document.getElementById("toplamFiyat");
  sepetIcerigi.innerHTML = "";
  let toplamFiyat = 0;

  sepet.forEach((urun) => {
    sepetIcerigi.innerHTML += `<p>${urun.isim}: ₺${urun.fiyat.toFixed(4)}</p>`;
    toplamFiyat += urun.fiyat;
  });

  toplamFiyatDiv.innerHTML = `<strong>Toplam Fiyat: ₺${toplamFiyat.toFixed(
    2
  )}</strong>`;
}

function ürünEkleme(ürün, ismi) {
  let kart = JSON.parse(localStorage.getItem("cart"));
}

document.querySelectorAll(".buy-btn").forEach((button, index) => {
  button.addEventListener("click", () => {
    let urunFiyati = parseFloat(
      button.previousElementSibling.getAttribute("data-original-price")
    );
    let urunIsmi = button.previousElementSibling.previousElementSibling.alt;
    sepeteEkle(urunFiyati, urunIsmi);
  });
});
