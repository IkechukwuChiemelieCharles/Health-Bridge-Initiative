const popUp = document.querySelectorAll(".popUp");
const submit = document.querySelectorAll(".submit");
const overlay = document.querySelectorAll(".overlay");

submit.forEach(function (submit, i) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    popUp[i].classList.remove("closed");
    popUp[i].classList.add("open");
    console.log("btn");
    overlay[i].classList.remove("hide");
  });
});

popUp.forEach(function (popUp, i) {
  popUp.addEventListener("click", function () {
    popUp.classList.add("closed");
    popUp.classList.remove("open");
    overlay[i].classList.add("hide");
  });
});
