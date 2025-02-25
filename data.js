//mobile menu
const mobille = document.querySelector(".mobille");

const ham = document.querySelector(".ham");
const closeArr = document.querySelector(".carret-left");
const darkOverlay = document.querySelector(".darkOverlay");

ham.addEventListener("click", function () {
  mobille.classList.toggle("open");
  darkOverlay.classList.toggle("hide");
  // mobille.classList.remove("closed");
  console.log("ham");
});

closeArr.addEventListener("click", function () {
  mobille.classList.toggle("open");
  darkOverlay.classList.add("hide");
});

darkOverlay.addEventListener("click", function () {
  mobille.classList.toggle("open");
  darkOverlay.classList.add("hide");
});

//service nav menu drop down

const listDropDown = document.querySelector(".listDropDown");
const dropMenu = document.querySelector(".dropMenu");

const imgDown = document.querySelector(".img-down");

listDropDown.addEventListener("click", function () {
  dropMenu.classList.toggle("hide");
  imgDown.classList.toggle("img-up");
});

//service mobile menu drop down

const serviceDrop = document.querySelector(".serviceDrop");
const serviceMobile = document.querySelector(".serviceMobile");

serviceDrop.addEventListener("click", function () {
  serviceMobile.classList.toggle("hide");
});
