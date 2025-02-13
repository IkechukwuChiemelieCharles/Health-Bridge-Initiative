const mobille = document.querySelector(".mobille");

const ham = document.querySelector(".ham");

const closeMobile = document.querySelector(".closeMobile");

ham.addEventListener("click", function () {
  mobille.classList.toggle("hide");
});
closeMobile.addEventListener("click", function () {
  mobille.classList.add("hide");
});


