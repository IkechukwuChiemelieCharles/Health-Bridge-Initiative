//Signup Form Control

const form = document.querySelector("form");
// form.classList
const inputField = document.querySelectorAll("input");

//selected Inputs by class
const fname = document.querySelector(".fName");
const Surname = document.querySelector(".Surname");
const number = document.querySelector(".number");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const ConfirmPassword = document.querySelector(".ConfirmPassword");

//selected error messages
const nameErr = document.querySelector(".nameErr");
const surNameErr = document.querySelector(".surNameErr");
const numErr = document.querySelector(".numErr");
const emailErr = document.querySelector(".emailErr");
const passwordErr = document.querySelector(".passwordErr");
const ConfirmPasswordErr = document.querySelector(".ConfirmPasswordErr");
// const nameErr = document.querySelector(".nameErr");
// const nameErr = document.querySelector(".nameErr");

form.addEventListener("submit", function (e) {
  console.log("none");
  //if inputs are empty add class of reject and display error text
  if (!fname.value) {
    e.preventDefault();

    console.log("none");
    fname.classList.add("rejected");
    nameErr.textContent = "fill in field";
  }
  if (!Surname.value) {
    e.preventDefault();

    console.log("none");
    Surname.classList.add("rejected");
    surNameErr.textContent = "fill in field";
  }
  if (!number.value) {
    e.preventDefault();
    console.log("none");
    number.classList.add("rejected");
    numErr.textContent = "fill in field";
  }
  if (!email.value) {
    e.preventDefault();
    console.log("none");
    email.classList.add("rejected");
    emailErr.textContent = "fill in field";
  }
  if (!password.value) {
    e.preventDefault();
    console.log("none");
    password.classList.add("rejected");
    passwordErr.textContent = "fill in field";
  }
  if (!ConfirmPassword.value) {
    e.preventDefault();
    console.log("none");
    ConfirmPassword.classList.add("rejected");
    ConfirmPasswordErr.textContent = "fill in field";
  }

  //if inputs are not empty add class of approve and remove error text
  if (fname.value) {
    fname.classList.add("approved");
    fname.classList.remove("rejected");
    nameErr.textContent = "";
  }
  if (Surname.value) {
    Surname.classList.add("approved");
    Surname.classList.remove("rejected");
    surNameErr.textContent = "";
  }
  if (number.value) {
    number.classList.add("approved");
    number.classList.remove("rejected");
    numErr.textContent = "";
  }
  if (email.value) {
    email.classList.add("approved");
    email.classList.remove("rejected");
    emailErr.textContent = "";
  }
  if (password.value) {
    password.classList.add("approved");
    password.classList.remove("rejected");
    passwordErr.textContent = "";
  }
  if (ConfirmPassword.value) {
    if (ConfirmPassword.value !== password.value) {
      e.preventDefault();
      ConfirmPasswordErr.textContent = "Passwords do not match";
      return;
    }

    ConfirmPassword.classList.add("approved");
    ConfirmPassword.classList.remove("rejected");
    ConfirmPasswordErr.textContent = "";
  }

  //   fname.value = "";
  //   Surname.value = "";
  //   number.value = "";
  //   email.value = "";
  //   password.value = "";
  //   ConfirmPassword.value = "";
});
