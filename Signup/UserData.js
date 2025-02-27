//Process

// 1. use node modules

//1. get the value of the input fields

// 2. save them inside locale storage

//3. connect the necessary files where data will be needed

// 4. get data nd display

// locale storage

export default function saveToStorage() {
  console.log(fname.value);
  localStorage.setItem("First Name", fname.value);
  localStorage.setItem("Surname", Surname.value);
  localStorage.setItem("Password", password.value);
  // localStorage.setItem("Phone Number", nu.value);
  // localStorage.setItem("firstName", fname.value);
  // localStorage.setItem("firstName", fname.value);

  // localStorage.clear();
  console.log("module works");
}
