const bg = document.querySelectorAll(".bg");

bg.forEach(function (toggleContainer) {
  toggleContainer.addEventListener("click", function () {
    console.log("toggled");

    toggleContainer.classList.toggle("activeToggle");
  });
});
