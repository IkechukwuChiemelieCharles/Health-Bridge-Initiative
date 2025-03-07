const reviewBtn = document.querySelectorAll(".review2");

const overviewBtn = document.querySelectorAll(".overview2");

const bottomReview = document.querySelectorAll(".bottomReview");

const edit = document.querySelectorAll(".edit");

reviewBtn.forEach(function (reviewBtn, i) {
  reviewBtn.addEventListener("click", function () {
    overviewBtn[i].classList.remove("overviewBtnactive");

    reviewBtn.classList.add("overviewBtnactive");

    bottomReview.forEach(function (bottomReview) {
      bottomReview.classList.remove("hide");

      console.log("review");
    });
  });
});

overviewBtn.forEach(function (overviewBtn, i) {
  overviewBtn.addEventListener("click", function () {
    overviewBtn.classList.add("overviewBtnactive");

    reviewBtn[i].classList.remove("overviewBtnactive");

    bottomReview.forEach(function (bottomReview) {
      bottomReview.classList.add("hide");
      console.log("over2");
    });
    // bottomReview[i].classList.add("hide");
  });
});

// const viewMore = document.querySelectorAll(".viewMore");
// const overMobileCont = document.querySelectorAll(".overMobileCont");
// const overlay = document.querySelectorAll(".overlay");

// viewMore.forEach(function (view, i) {
//   view.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("over");

//     overMobileCont.forEach(function (overMobileCont) {
//       overMobileCont.classList.add("open");
//       overMobileCont.classList.remove("closed");
//     });

//     overlay.forEach(function (overlay, i) {
//       overlay.classList.remove("hide");
//     });
//   });
// });

// overlay.forEach(function (overlay, i) {
//   overlay.addEventListener("click", function () {
//     overMobileCont[i].classList.remove("open");
//     overMobileCont[i].classList.add("closed");
//     overlay.classList.add("hide");
//   });
// });

// edit.forEach(function (edit, i) {
//   edit.addEventListener("click", function () {
//     console.log("over");

//     overMobileCont.forEach(function (overMobileCont) {
//       overMobileCont.classList.add("open");
//       overMobileCont.classList.remove("closed");
//     });

//     overlay.forEach(function (overlay, i) {
//       overlay.classList.remove("hide");
//     });
//   });
// });

///////////////////////************MAP************88///////////////////////*
// /

//Mobile toggle

const darkOverlay2 = document.querySelector(".darkOverlay");
const mobile2 = document.querySelector(".mobille");

const ham2 = document.querySelector(".ham");

ham2.addEventListener("click", function () {
  mobile2.classList.add("openmobile");
  darkOverlay2.classList.remove("hide");

  console.log("ham");
});

darkOverlay2.addEventListener("click", function () {
  mobile2.classList.remove("openmobile");
  darkOverlay2.classList.add("hide");
});
