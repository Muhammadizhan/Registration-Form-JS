const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

let usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
// let cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(username.value);
  console.log(email.value);
  console.log(password.value);
});
