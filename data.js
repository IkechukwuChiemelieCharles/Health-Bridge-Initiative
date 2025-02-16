const mobille = document.querySelector(".mobille");

const ham = document.querySelector(".ham");

ham.addEventListener("click", function () {
  mobille.classList.toggle("hide");
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
