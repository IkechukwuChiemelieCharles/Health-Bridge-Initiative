const reviewBtn = document.querySelector("#review");

const bottomReview = document.querySelector(".bottomReview");
reviewBtn.addEventListener("click", function () {
  bottomReview.classList.toggle("hide");
});
