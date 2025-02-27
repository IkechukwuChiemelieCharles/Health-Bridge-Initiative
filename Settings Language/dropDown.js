"use strict";

const selectDropDown = document.querySelectorAll(".select");

const selectDropDownimg = document.querySelectorAll(".img");

const selectDropContainer = document.querySelectorAll(".selectDrop");

const displayOption = document.querySelectorAll(".displayOption");

const options = document.querySelectorAll(".option");

selectDropDown.forEach(function (select, i) {
  select.addEventListener("click", function () {
    selectDropDownimg[i].classList.toggle("img-up");
    selectDropContainer[i].classList.toggle("hide");

    console.log("fh");
  });
});

options.forEach(function (option, i) {
  option.addEventListener("click", function () {
    console.log(option.textContent);

    displayOption.forEach(function (displayOption, i) {
      displayOption.textContent = option.textContent;
    });
    selectDropContainer.forEach(function (selectDropContainer, i) {
      selectDropContainer.classList.add("hide");
    });

    selectDropDownimg.forEach(function (selectDropDownimg, i) {
      selectDropDownimg.classList.remove("img-up");
    });
  });
});

const userName = document.querySelectorAll(".userName");

const savedUserName = localStorage.getItem("First Name");

userName.forEach(function (name) {
  name.textContent = `Hello ${savedUserName},`;
});

// userFullName.forEach(function (name) {
//   name.textContent = `${savedUserName} ${savedUsersurName}`;
// });
