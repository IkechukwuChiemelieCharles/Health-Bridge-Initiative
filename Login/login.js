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

// console.log(savedData);

// loginBtn.addEventListener(
//   (e) => "click",
//   () => {
//     e.preventDefault();
//     console.log("clicked");
//   }
// );
