const viewMoreBtn = document.querySelectorAll(".view");

const calendar = document.querySelector(".calendar");

viewMoreBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    console.log("click");
    calendar.classList.add("open");
    calendar.classList.remove("closed");
  });
});
calendar.addEventListener("click", function () {
  calendar.classList.remove("open");
  calendar.classList.add("closed");
});
