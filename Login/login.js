const form = document.querySelector("form");

const emailInput = document.querySelector(".emailInput");

const passwordInput = document.querySelector(".passwordInput");

const emailErr = document.querySelector(".emailErr");

const passwordErr = document.querySelector(".passwordErr");

// console.log(emailInput);

form.addEventListener("submit", function (e) {
  if (emailInput.value) {
    emailInput.classList.add("approved");
    emailInput.classList.remove("reject");
    emailErr.textContent = "";
  }
  if (passwordInput.value) {
    if (passwordInput.value.length < 6) {
      console.log("none3");
      passwordInput.classList.add("reject");
      passwordErr.textContent = "Password must be upto 6 characters";
      e.preventDefault();

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
    console.log("none2");
    passwordInput.classList.add("reject");
    passwordErr.textContent = "Please type in your Password ";
    e.preventDefault();
  }
});

// loginBtn.addEventListener(
//   (e) => "click",
//   () => {
//     e.preventDefault();
//     console.log("clicked");
//   }
// );
