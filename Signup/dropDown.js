"use strict";

const selectDropDown = document.querySelector(".select");

const selectDropDownimg = document.querySelector(".img");

const selectDropContainer = document.querySelector(".selectDrop");

const displayOption = document.querySelector(".displayOption");

const options = document.querySelectorAll(".option");

selectDropDown.addEventListener("click", function () {
  selectDropDownimg.classList.toggle("img-up");
  selectDropContainer.classList.toggle("hide");
});

options.forEach(function (option) {
  option.addEventListener("click", function () {
    console.log(option.textContent);
    console.log(displayOption.textContent);
    displayOption.textContent = option.textContent;
    selectDropContainer.classList.add("hide");
    selectDropDownimg.classList.remove("img-up");
  });
});
