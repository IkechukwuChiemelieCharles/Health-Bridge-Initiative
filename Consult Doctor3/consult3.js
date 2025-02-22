const DocContainer = document.querySelectorAll(".container");
const docProfile = document.querySelectorAll(".docProfile");
const body = document.querySelector("body");
const book = document.querySelector(".book");
const overlay = document.querySelector(".overlay");
const calendar = document.querySelector(".calendar");

const videoOption = document.querySelector(".videoOption");

console.log(docProfile);

//looped over doc containers, added event and made doc profile display
DocContainer.forEach(function (cont, i) {
  cont.addEventListener("click", function () {
    //displayed doc profile
    docProfile.forEach(function (doc) {
      doc.classList.add("open");
      doc.classList.remove("closed");

      //displayed overlay
      overlay.classList.remove("hide");
      console.log("doc");
    });
  });
});

//added event to over lay to close pop ups when clicked
overlay.addEventListener("click", function () {
  //closed doc popups
  docProfile.forEach(function (docs) {
    docs.classList.remove("open");
    docs.classList.add("closed");
  });

  // removed calendar
  calendar.classList.remove("open");
  calendar.classList.add("closed");

  // removed video option
  videoOption.classList.remove("open");
  videoOption.classList.add("closed");

  // removed over lay
  overlay.classList.add("hide");
});

//displayed calendar when booked button is clicked
book.addEventListener("click", function () {
  calendar.classList.add("open");
  calendar.classList.remove("closed");
  console.log("elf");

  //removed doc profile when book is clicked
  docProfile.forEach(function (docs) {
    docs.classList.remove("open");
    docs.classList.add("closed");
  });
});

//displayed videoOption when submit button is clicked
calendar.addEventListener("click", function () {
  videoOption.classList.add("open");
  videoOption.classList.remove("closed");

  //removed calendar when submit is clicked
  calendar.classList.remove("open");
  calendar.classList.add("closed");
});
