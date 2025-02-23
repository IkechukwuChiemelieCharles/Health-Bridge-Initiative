const viewMore = document.querySelectorAll(".viewMore");

viewMore.forEach(function (view) {
  view.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("first");
  });
});
