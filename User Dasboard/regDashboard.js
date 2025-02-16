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
