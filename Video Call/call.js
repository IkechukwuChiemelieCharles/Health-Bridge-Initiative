"use strict";

const incall = document.querySelectorAll(".incall");
const carretDown = document.querySelectorAll(".carretDown");

const messageArea = document.querySelector(".messageArea");
const messageTab = document.querySelectorAll(".message");

const videoContainer = document.getElementById("videoContainer");

incall.forEach(function (incall, i) {
  incall.addEventListener("click", function () {
    messageArea.classList.add("open");
    messageArea.classList.remove("closed");
    console.log("hey");

    messageTab.forEach(function (m) {
      m.classList.add("open");
      m.classList.remove("closed");
    });

    videoContainer.style.width = "65%";
  });
});

carretDown.forEach(function (carretDown, i) {
  carretDown.addEventListener("click", function () {
    messageArea.classList.remove("open");
    messageArea.classList.add("closed");

    messageTab.forEach(function (m) {
      m.classList.remove("open");
      m.classList.add("closed");
    });

    videoContainer.style.width = "100%";
  });
});
