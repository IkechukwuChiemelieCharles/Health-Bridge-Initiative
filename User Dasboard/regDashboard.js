// setting current Date

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = document.querySelector("#date");
const currYear = new Date().getFullYear();
const currMonth = months[new Date().getMonth()];
const currDay = new Date().getDate();

// console.log(currDate);

date.textContent = `${currDay}th ${currMonth} ${currYear}`;

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
// console.log(userName);

