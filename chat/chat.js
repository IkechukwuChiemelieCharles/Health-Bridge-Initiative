const darkOverlay2 = document.querySelector(".darkOverlay");
const mobile2 = document.querySelector(".mobille");

const ham2 = document.querySelector(".ham");

ham2.addEventListener("click", function () {
  mobile2.classList.add("openmobile");
  darkOverlay2.classList.remove("hide");

  console.log("ham");
});

darkOverlay2.addEventListener("click", function () {
  mobile2.classList.remove("openmobile");
  darkOverlay2.classList.add("hide");
});
