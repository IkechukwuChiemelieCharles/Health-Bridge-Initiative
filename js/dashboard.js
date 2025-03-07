const mobille = document.querySelectorAll(".mobille");

const ham = document.querySelectorAll(".ham");
const serviceDrop = document.querySelectorAll(".serviceDrop");
const serviceMobile = document.querySelectorAll(".serviceMobile");

//mobile menu

const darkOverlay = document.querySelectorAll(".darkOverlay");

ham.forEach(function (ham, i) {
  ham.addEventListener("click", function () {
    mobille[i].classList.add("open");
    darkOverlay.forEach(function (darkOverlay) {
      darkOverlay.classList.remove("hide");
    });

    console.log("ham");
  });
});

darkOverlay.forEach(function (darkOverlay, i) {
  darkOverlay.addEventListener("click", function () {
    mobille[i].classList.remove("open");
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

serviceDrop.forEach(function (s, i) {
  s.addEventListener("click", function () {
    serviceMobile[i].classList.toggle("hide");
    console.log("derv");
  });
});
