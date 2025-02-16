const mobille = document.querySelectorAll(".mobille");

const ham = document.querySelectorAll(".ham");

ham.forEach(function (ham, i) {
  ham.addEventListener("click", function () {
    mobille[i].classList.toggle("hide");
  });
});
closeMobile.addEventListener("click", function () {
  mobille.classList.add("hide");
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
