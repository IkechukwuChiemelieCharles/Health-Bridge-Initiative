const bg = document.querySelectorAll(".bg");

bg.forEach(function (toggleContainer) {
  toggleContainer.addEventListener("click", function () {
    console.log("toggled");

    toggleContainer.classList.toggle("activeToggle");
  });
});

const userName = document.querySelectorAll(".userName");

const userFullName = document.querySelectorAll(".userFullName");

const savedUserName = localStorage.getItem("First Name");
const savedUsersurName = localStorage.getItem("Surname");
const savedUserAge = localStorage.getItem("age");

userName.forEach(function (name) {
  name.textContent = `Hello ${savedUserName},`;
});

userFullName.forEach(function (name) {
  name.textContent = `${savedUserName} ${savedUsersurName}`;
});
