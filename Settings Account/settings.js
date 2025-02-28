const userName = document.querySelectorAll(".userName");

const savedUserName = localStorage.getItem("First Name");

userName.forEach(function (name) {
  name.textContent = `Hello ${savedUserName},`;
})