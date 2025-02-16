const questions = document.querySelectorAll(".question");
const questConts = document.querySelectorAll(".questCont");

const answerCont = document.querySelectorAll(".answer");

const plusImg = document.querySelectorAll(".plusImg");
const minusImg = document.querySelectorAll(".minusImg");

// lopoped through the question container and added an event listener to each of them which removes the hidden class on each answer container
questions.forEach(function (q, index) {
  q.addEventListener("click", function () {
    console.log("click");
    answerCont[index].classList.toggle("hidden");
    plusImg[index].classList.toggle("hidden");
    minusImg[index].classList.toggle("hidden");
  });
});
