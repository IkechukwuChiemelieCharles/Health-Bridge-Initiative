const DocContainer = document.querySelectorAll(".container");
const docProfile = document.querySelectorAll(".docProfile");
const body = document.querySelector("body");
const book = document.querySelectorAll(".book");

console.log(docProfile);

DocContainer.forEach(function (cont, i) {
  cont.addEventListener("click", function () {
    docProfile.forEach(function (doc) {
      doc.classList.add("open");
      doc.classList.remove("closed");
      console.log("doc");
    });
  });
});

docProfile.forEach(function (doc) {
  doc.addEventListener("click", function () {
    doc.classList.remove("open");
    doc.classList.add("closed");
    console.log("body");
  });
});
