window.onload = function () {
  setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
  }, 1000);
};

window.onclick = function (event) {
  const popup = document.getElementById("popup");
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");

  window.addEventListener("click", function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });

  document.addEventListener("click", function (event) {
    if (!popup.contains(event.target)) {
      popup.style.display = "none";
    }
  });
});


const images = document.querySelectorAll(".images-container img");
images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.classList.add("hidden"); //görünürlük kapandı
  });
  image.addEventListener("mouseout", () => {
    image.classList.remove("hidden"); //görünürlük açıldı
  });
});



let formİnputDeğerAl = document.querySelector("")









// const yorumDivi = document.getElementsByClassName("commentEkle");
// const myInput = document.createElement("input");
// myInput.setAttribute("id", "inputumuz");
// myInput.setAttribute("type", "text");
// myInput.setAttribute("value", "Buraya yazın");

// //divin ismi comments
// yorumDivi.appendChild(myInput);
// //********tıklanan ögen ne */
// const inputDeğer = document.getElementById("inputumuz").ariaValueMax;
// console.log(inputDeğer);
// document.addEventListener("click", function (e) {
//   const target = e.target; // Tıklanan öğeyi alıyoruz

//   const tagName = target.tagName.toLowerCase(); // Etiket adını alıyoruz
//   const id = target.id ? `#${target.id}` : ""; // Varsa id'sini alıyoruz
//   const className = target.className
//     ? `.${target.className.split(" ").join(".")}`
//     : ""; // Varsa class ismini alıyoruz

//   belirtec = tagName + id + className; // Etiket adı, id ve class birleştiriliyor

//   console.log("Tıklanan öğenin seçici bilgisi:", belirtec);
// });
