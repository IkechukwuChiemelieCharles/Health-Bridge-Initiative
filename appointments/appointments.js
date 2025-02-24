const viewMoreBtn = document.querySelectorAll(".view");

const calendar = document.querySelector(".calendar");

const icons = document.querySelectorAll(".icon");

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

icons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    icons.forEach(function (icon) {
      icon.classList.remove("activeIcon");
    });
    console.log("click");

    icon.classList.add("activeIcon");
  });
});
