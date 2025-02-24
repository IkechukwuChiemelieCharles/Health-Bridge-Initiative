const boxes = document.querySelectorAll(".box");

boxes.forEach(function (box, i) {
  box.addEventListener("click", function () {
    boxes.forEach(function (box) {
      box.classList.remove("activeBox");
    });
    box.classList.add("activeBox");
  });
});
