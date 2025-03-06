// import saveToStorage from "../Signup/signup";

// import {signupForm} from "../Signup/signup";

const form = document.querySelector(".form2");

const emailInput = document.querySelector(".emailInput");

const passwordInput = document.querySelector(".passwordInput");

const emailErr = document.querySelector(".emailErr");

const passwordErr = document.querySelector(".passwordErr");

// console.log(emailInput);

const savedData = localStorage.getItem("Password");
const savedEmail = localStorage.getItem("email");

console.log(savedEmail);

console.log(savedData);

form.addEventListener("submit", function (e) {
  if (emailInput.value) {
    emailInput.classList.add("approved");
    emailInput.classList.remove("reject");
    emailErr.textContent = "";

    if (emailInput.value !== savedEmail) {
      passwordInput.classList.add("reject");
      e.preventDefault();
      emailErr.textContent = "Incorrect Email Address";
      return;
    }
  }
  if (passwordInput.value) {
    if (passwordInput.value.length < 6) {
      console.log("none3");
      passwordInput.classList.add("reject");
      passwordErr.textContent = "Password must be upto 6 characters";
      e.preventDefault();

      return;
    }

    if (passwordInput.value !== savedData) {
      passwordInput.classList.add("reject");

      e.preventDefault();
      passwordErr.textContent = "Incorrect Password ";
      return;
    }

    passwordInput.classList.add("approved");
    passwordInput.classList.remove("reject");
    passwordErr.textContent = "";
  }
  if (!emailInput.value) {
    console.log("none1");
    emailInput.classList.add("reject");
    emailErr.textContent = "Email Field Can't Be Empty";
    e.preventDefault();
  }
  if (!passwordInput.value) {
    passwordInput.classList.add("reject");
    e.preventDefault();

    passwordErr.textContent = "Please type in your Password ";
    passwordErr.textContent = "Incorrect Password ";
  }
});

//forgot password toggle

const forgot = document.querySelector(".forgot");
const closeImg = document.querySelector(".closeImg");
const overlay = document.querySelector(".overlay");
const forgotPasswordContainer = document.querySelector(".forgotPassword");

forgot.addEventListener("click", function (e) {
  e.preventDefault();
  forgotPasswordContainer.classList.add("open");
  overlay.classList.remove("hide");
  console.log("hey");
});

overlay.addEventListener("click", function (e) {
  forgotPasswordContainer.classList.remove("open");
  overlay.classList.add("hide");
});
closeImg.addEventListener("click", function (e) {
  forgotPasswordContainer.classList.remove("open");
  overlay.classList.add("hide");
});

const forgotPasswordInput = document.querySelector("#forgotPasswordInput");
const confirmForgotPasswordInput = document.querySelector(
  "#confirmForgotPasswordInput"
);

const changePass = document.querySelector(".changePass");

changePass.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hey");
  saveForgotToStorage();
});

function saveForgotToStorage() {
  localStorage.setItem("forgotpassword", forgotPasswordInput.value);

  const forgot = localStorage.getItem(forgotpassword);
  console.log(forgot);

  // if
  // localStorage.clear;
}
