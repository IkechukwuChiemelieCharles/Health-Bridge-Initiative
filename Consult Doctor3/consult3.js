const DocContainer = document.querySelectorAll(".container");
const docProfile = document.querySelectorAll(".docProfile");
const body = document.querySelector("body");
const book = document.querySelector(".book");
const overlay = document.querySelector(".overlay");
const calendar = document.querySelector(".calendar");

const videoOption = document.querySelector(".videoOption");

const boxes = document.querySelectorAll(".box");
const Deskinnerdoc = document.querySelector("#Deskinnerdoc");

// console.log(Deskinnerdoc.innerHTML);

// console.log(docProfile);

//looped over doc containers, added event and made doc profile display
DocContainer.forEach(function (cont, i) {
  cont.addEventListener("click", function () {
    //displayed doc profile
    docProfile.forEach(function (doc) {
      const imgdiv = cont.querySelector(".img");
      const image = imgdiv.querySelector("img");
      const para = imgdiv.querySelector("h2");

      // chained through the layers of nested nodes to get to the image
      const docImage = doc
        .querySelector(".innerDoc")
        .querySelector(".formerArt")
        .querySelector(".topCont")
        .querySelector(".topProfile")
        .querySelector(".docImg");

      // chained through the layers of nested nodes to get to the h2 (name display container)
      const docName = doc
        .querySelector(".innerDoc")
        .querySelector(".formerArt")
        .querySelector(".topCont")
        .querySelector(".topProfile")
        .querySelector("span")
        .querySelector("h2");

      // changed the single doc container image and name to the image and name of the container being clicked
      docName.textContent = para.textContent;
      docImage.src = image.src;

      // chained through the layers of nested nodes to get to the image of the desktop
      const DeskdocImage = Deskinnerdoc.querySelector(".formerArt")
        .querySelector(".topCont")
        .querySelector(".topProfile")
        .querySelector(".docImg");

      // chained through the layers of nested nodes to get to the h2 of the desktop (name display container)
      const DeskdocName = Deskinnerdoc.querySelector(".formerArt")
        .querySelector(".topCont")
        .querySelector(".topProfile")
        .querySelector("span")
        .querySelector("h2");

      // changed the single desktop doc container image and name to the image and name of the container being clicked

      DeskdocName.textContent = para.textContent;
      DeskdocImage.src = image.src;

      docName.addEventListener("click", function () {
        console.log("docname");
      });

      // console.log(docImage);
      // console.log(docName);

      // console.log();

      // console.log(chidren);

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

//looped through boxes to change back ground when clicked

boxes.forEach(function (box, i) {
  box.addEventListener("click", function () {
    boxes.forEach(function (box) {
      box.classList.remove("activeBox");
    });
    box.classList.add("activeBox");
  });
});
