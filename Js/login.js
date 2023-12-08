const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const btn_submit = document.querySelector(".btn-submit");
const button = document.querySelector("button");
const toast_sucesss = document.querySelector(".toast_sucesss");
const toast_failed = document.querySelector(".toast_failed");
const closeIcon = document.querySelector(".close");
const progress_sucess = document.querySelector(".progress_sucess ");
const progress_failed = document.querySelector(".progress_failed");
const href_home = document.querySelector(".href-home");
var form = document.getElementById("your-form-id");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(username);
  if (username === "admin" && password === "123456") {
    toast_sucesss.classList.add("active");
    progress_sucess.classList.add("active");
    setTimeout(() => {
      toast_sucesss.classList.remove("active");
      progress_sucess.classList.remove("active");
    }, 3000);
    setTimeout(() => {
      form.submit();
    }, 2000);
    return true;
  } else {
    toast_failed.classList.add("active");
    progress_failed.classList.add("active");
    setTimeout(() => {
      toast_failed.classList.remove("active");
      progress_failed.classList.remove("active");
    }, 2000);
    return false;
  }
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");
});

// *******************
// Form register
// ******************
// checked username , email, password
const emailInput = document.querySelector(".input_mail");
const userInput = document.querySelector(".input_user");
const input_field = document.querySelectorAll(".input-field");
const note = document.querySelector(".note");
var form_res = document.getElementById("your-form-id-res");
console.log(input_field);
// UserName

userInput.addEventListener("input", (e) => {
  var inputValue = userInput.value.trim();
  if (inputValue === "" || inputValue.length > 20 || /\s/.test(inputValue)) {
    note.classList.add("display_note"); // Ngăn chặn form được gửi nếu có lỗi
    e.preventDefault();
  } else {
    note.classList.remove("display_note");
    input_field[2].classList.add("checked_value");
  }
  if (!inputValue) {
    input_field[2].classList.remove("checked_value");
    note.classList.remove("display_note");
  }
});
// Email
emailInput.addEventListener("input", function (e) {
  const value = e.target.value;
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexEmail.test(value.trim())) {
    input_field[3].classList.add("checked_value");
  } else {
    input_field[3].classList.remove("checked_value");
  }

  if (!value) {
    input_field[3].classList.remove("checked_value");
  }
});
//  password_register
const password_register = document.querySelector(".password_register");
const note_register = document.querySelector(".note_register");
password_register.addEventListener("input", (e) => {
  var password = password_register.value;
  var regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;

  if (!regex.test(password)) {
    note_register.classList.add("display_note");
    input_field[4].classList.remove("checked_value");
    e.preventDefault();
  } else {
    note_register.classList.remove("display_note");
    input_field[4].classList.add("checked_value");
  }
  if (!password) {
    note_register.classList.remove("display_note");
    input_field[4].classList.remove("checked_value");
  } // Ngăn chặn form được gửi nếu có lỗi
});
form_res.addEventListener("submit", (e) => {
  if (
    input_field[2].classList.contains("checked_value") &&
    input_field[3].classList.contains("checked_value") &&
    input_field[4].classList.contains("checked_value")
  ) {
    form_res.submit();
  } else {
  }
  e.preventDefault();
});
// ***********Show hide password
// toggleSignIn
const toggleSignIn = document.querySelector(".toggleSignIn");
toggleSignIn.addEventListener("click", function () {
  const input = this.previousElementSibling;
  const inputType = input.getAttribute("type");
  if (inputType === "password") {
    input.setAttribute("type", "text");
    toggleSignIn.classList.toggle("fa-eye");
    toggleSignIn.classList.toggle("fa-eye-slash");
  } else {
    toggleSignIn.classList.toggle("fa-eye");
    toggleSignIn.classList.toggle("fa-eye-slash");
    input.setAttribute("type", "password");
  }
});

// toggleRegister
const toggleRegister = document.querySelector(".toggleRegister");
toggleRegister.addEventListener("click", function () {
  const input = this.previousElementSibling;
  const inputType = input.getAttribute("type");
  if (inputType === "password") {
    input.setAttribute("type", "text");
    toggleRegister.classList.toggle("fa-eye");
    toggleRegister.classList.toggle("fa-eye-slash");
  } else {
    toggleRegister.classList.toggle("fa-eye");
    toggleRegister.classList.toggle("fa-eye-slash");
    input.setAttribute("type", "password");
  }
});
