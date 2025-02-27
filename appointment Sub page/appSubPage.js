const boxes = document.querySelectorAll(".box");
const profile = document.querySelectorAll(".profile");

boxes.forEach(function (box, i) {
  box.addEventListener("click", function () {
    boxes.forEach(function (box) {
      box.classList.remove("activeBox");
    });
    box.classList.add("activeBox");
  });
});

const checkDetails = document.querySelectorAll(".checkDetails");

const docProfile = document.querySelectorAll(".docProfile");
const closeX = document.querySelectorAll(".closeX");
const overlay = document.querySelectorAll(".overlay");

checkDetails.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    docProfile.forEach(function (doc) {
      doc.classList.remove("closed");
      doc.classList.add("open");
      overlay.forEach(function (overlay, i) {
        overlay.classList.remove("hide");
      });

      const DeskdocName = doc
        .querySelector(".innerDoc")
        .querySelector(".formerArt")
        .querySelector(".topCont")
        .querySelector(".topProfile")
        .querySelector("span")
        .querySelector("h2");

      const docImgContainer = doc
        .querySelector(".innerDoc")
        .querySelector(".formerArt")
        .querySelector(".topCont")
        .querySelector(".topProfile")
        .querySelector("img");
    });

    // console.log(DeskdocName);
  });

  // profile.forEach(function (prof, i) {
  //   const image = prof.querySelector("img");
  //   const doctorName = prof
  //     .querySelector(".name")
  //     .querySelector(".doctorName");
  //   console.log(doctorName);
  // });
});

closeX.forEach(function (closeX, i) {
  closeX.addEventListener("click", function () {
    docProfile.forEach(function (doc) {
      doc.classList.add("closed");
      doc.classList.remove("open");
      overlay.forEach(function (overlay, i) {
        overlay.classList.add("hide");
      });
    });
  });
});

// const profile = document.querySelectorAll(".profile");

// profile.forEach(function (profile) {
//   const image = profile.querySelector("img");
//   const doctorName = profile
//     .querySelector(".name")
//     .querySelector(".doctorName");

//   const DeskdocName = docProfile
//     .querySelector(".innerDoc")
//     .querySelector(".formerArt")
//     .querySelector(".topCont")
//     .querySelector(".topProfile")
//     .querySelector("span")
//     .querySelector("h2");

//   const docImgContainer = docProfile
//     .querySelector(".innerDoc")
//     .querySelector(".formerArt")
//     .querySelector(".topCont")
//     .querySelector(".topProfile")
//     .querySelector("img");

//   checkDetails.forEach(function (checkbtn) {
//     doctorName = DeskdocName;
//   });

//   console.log(doctorName);
//   console.log(image);
// });
