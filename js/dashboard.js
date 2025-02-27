const mobille = document.querySelectorAll(".mobille");

const ham = document.querySelectorAll(".ham");

//mobile menu

const darkOverlay = document.querySelectorAll(".darkOverlay");

ham.forEach(function (ham, i) {
  ham.addEventListener("click", function () {
    mobille[i].classList.toggle("open");
    darkOverlay.forEach(function (darkOverlay) {
      darkOverlay.classList.toggle("hide");
    });

    console.log("ham");
  });
});

darkOverlay.forEach(function (darkOverlay, i) {
  darkOverlay.addEventListener("click", function () {
    mobille[i].classList.toggle("open");
    darkOverlay.classList.add("hide");
  });
});

//service drop down

const listDropDown = document.querySelector(".listDropDown");
const dropMenu = document.querySelector(".dropMenu");

const imgDown = document.querySelector(".img-down");

listDropDown.addEventListener("click", function () {
  dropMenu.classList.toggle("hide");
  imgDown.classList.toggle("img-up");
  console.log("fdf");
});
