//mobile menu
const mobille = document.querySelector(".mobille");

const ham = document.querySelector(".ham");

ham.addEventListener("click", function () {
  mobille.classList.toggle("hide");
});

//service nav menu drop down

const listDropDown = document.querySelector(".listDropDown");
const dropMenu = document.querySelector(".dropMenu");

const imgDown = document.querySelector(".img-down");

listDropDown.addEventListener("click", function () {
  dropMenu.classList.toggle("hide");
  imgDown.classList.toggle("img-up");
  console.log("fdf");
});

//service mobile menu drop down

const serviceDrop = document.querySelector(".serviceDrop");
const serviceMobile = document.querySelector(".serviceMobile");

serviceDrop.addEventListener("click", function () {
  serviceMobile.classList.toggle("hide");
});
