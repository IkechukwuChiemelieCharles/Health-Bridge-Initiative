const viewMore = document.querySelectorAll(".viewMore");
const overMobileCont = document.querySelectorAll(".overMobileCont");

const overlay = document.querySelectorAll(".overlay");

const reviewBtn = document.querySelectorAll(".review2");

const overviewBtn = document.querySelectorAll(".overview2");

const bottomReview = document.querySelectorAll(".bottomReview");

const edit = document.querySelectorAll(".edit");

reviewBtn.forEach(function (reviewBtn, i) {
  reviewBtn.addEventListener("click", function () {
    bottomReview.forEach(function (bottomReview) {
      bottomReview.classList.remove("hide");

      console.log("review");
    });
  });
});

overviewBtn.forEach(function (overviewBtn, i) {
  overviewBtn.addEventListener("click", function () {
    bottomReview.forEach(function (bottomReview) {
      bottomReview.classList.add("hide");
      console.log("over2");
    });
    // bottomReview[i].classList.add("hide");
  });
});

viewMore.forEach(function (view, i) {
  view.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("over");

    overMobileCont.forEach(function (overMobileCont) {
      overMobileCont.classList.add("open");
      overMobileCont.classList.remove("closed");
    });

    overlay.forEach(function (overlay, i) {
      overlay.classList.remove("hide");
    });
  });
});

overlay.forEach(function (overlay, i) {
  overlay.addEventListener("click", function () {
    overMobileCont[i].classList.remove("open");
    overMobileCont[i].classList.add("closed");
    overlay.classList.add("hide");
  });
});






edit.forEach(function (edit, i) {
  edit.addEventListener("click", function () {
    console.log("over");

    overMobileCont.forEach(function (overMobileCont) {
      overMobileCont.classList.add("open");
      overMobileCont.classList.remove("closed");
    });

    overlay.forEach(function (overlay, i) {
      overlay.classList.remove("hide");
    });
  });
});