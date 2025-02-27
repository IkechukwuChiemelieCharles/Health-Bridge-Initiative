// import saveToStorage from "./UserData.js";
// export { signupForm, saveToStorage };
//Signup Form Control

const signupForm = document.querySelector(".form1");
const inputField = document.querySelectorAll("input");

//selected Inputs by class
const fname = document.querySelector(".fName");
const Surname = document.querySelector(".Surname");
const age = document.querySelector(".displayOption");
const select = document.querySelector(".select");

const number = document.querySelector(".number");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const ConfirmPassword = document.querySelector(".ConfirmPassword");

//selected error messages
const nameErr = document.querySelector(".nameErr");
const surNameErr = document.querySelector(".surNameErr");
const numErr = document.querySelector(".numErr");
const ageErr = document.querySelector(".ageErr");

const SignupemailErr = document.querySelector(".emailErr");
const signuppasswordErr = document.querySelector(".passwordErr");
const ConfirmPasswordErr = document.querySelector(".ConfirmPasswordErr");
// const nameErr = document.querySelector(".nameErr");
// const nameErr = document.querySelector(".nameErr");

// console.log(signupForm);

signupForm.addEventListener("submit", function (e) {
  //if inputs are empty add class of reject and display error text
  if (!fname.value) {
    e.preventDefault();

    fname.classList.add("rejected");
    nameErr.textContent = "fill in field";
  }
  if (!Surname.value) {
    e.preventDefault();

    Surname.classList.add("rejected");
    surNameErr.textContent = "fill in field";
  }
  if (!number.value) {
    e.preventDefault();
    number.classList.add("rejected");
    numErr.textContent = "fill in field";
  }
  if (age.textContent === "Select") {
    e.preventDefault();
    select.classList.add("rejected");
    ageErr.textContent = "fill in field";
  }

  if (!email.value) {
    e.preventDefault();
    email.classList.add("rejected");
    SignupemailErr.textContent = "fill in field";
  }
  if (!password.value) {
    e.preventDefault();
    password.classList.add("rejected");
    signuppasswordErr.textContent = "fill in field";
  }
  if (!ConfirmPassword.value) {
    e.preventDefault();
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
    SignupemailErr.textContent = "";
  }
  if (password.value) {
    password.classList.add("approved");
    password.classList.remove("rejected");
    signuppasswordErr.textContent = "";
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

  saveToStorage();
});
function saveToStorage() {
  console.log(fname.value);
  localStorage.setItem("First Name", fname.value);
  localStorage.setItem("Surname", Surname.value);
  // localStorage.setItem("age", a.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("Password", password.value);

  // localStorage.clear();
  console.log("module works");
}
