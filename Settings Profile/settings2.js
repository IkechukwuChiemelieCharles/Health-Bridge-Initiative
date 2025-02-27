const userName = document.querySelectorAll(".userName");
const firstNamePara = document.querySelectorAll(".firstNamePara");
const lastNamePara = document.querySelectorAll(".lastNamePara");
const emailPara = document.querySelectorAll(".emailPara");
const numPara = document.querySelectorAll(".numPara");

const savedUserName = localStorage.getItem("First Name");
const PhoneNumber = localStorage.getItem("Phone Number");
const Surname = localStorage.getItem("Surname");
const email = localStorage.getItem("email");

userName.forEach(function (name) {
  name.textContent = `Hello ${savedUserName},`;
});

firstNamePara.forEach(function (name) {
  name.textContent = savedUserName;
});

lastNamePara.forEach(function (name) {
  name.textContent = Surname;
});

emailPara.forEach(function (name) {
  name.textContent = email;
});

numPara.forEach(function (name) {
  name.textContent = PhoneNumber;
});
