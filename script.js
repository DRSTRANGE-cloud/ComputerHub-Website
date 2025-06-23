var flag = true,
  n = 0,
  timer1,
  timer2,
  timer3;
var acc = document.querySelector("#account-count");
var res = document.querySelector("#resource-count");
var proj = document.querySelector("#project-count");

function loadContent() {
  let image;
  for (let i = 1; i < 7; i++) {
    image = document.querySelector(".item" + i);
    if (i == 4)
      image.style.backgroundImage = ` linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1)), url("images/comp${i}.png")`;
    else
      image.style.backgroundImage = ` linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1)), url("images/comp${i}.jpg")`;
  }
  if (localStorage.getItem("username") == null) {
    display("#create-account", "");
  } else {
    display("#create-account", "none");
  }
}
function display(element, value) {
  document.querySelector(element).style.display = value;
}
function browse(element) {
  var sem = element.textContent.trim().toLowerCase();
  switch (sem) {
    case "first semester":
      window.location.href =
        "https://msbtestudyresources.in/subjects/CO/COSyllabus.html";
      break;
    case "second semester":
      window.location.href =
        "https://msbtestudyresources.in/subjects/CO/COSyllabus.html";
      break;
    case "third semester":
      window.location.href =
        "https://msbtestudyresources.in/subjects/CO/COSyllabus.html";
      break;
    case "fourth semester":
      window.location.href =
        "https://msbtestudyresources.in/subjects/CO/COSyllabus.html";
      break;
    case "fifth semester":
      window.location.href =
        "https://msbtestudyresources.in/subjects/CO/COSyllabus.html";
      break;
    case "sixth semester":
      window.location.href =
        "https://msbtestudyresources.in/subjects/CO/COSyllabus.html";
      break;
    default:
      alert("Some uneceptional browsing occurred");
  }
}
function browse() {
  window.location.href =
    "https://msbtestudyresources.in/subjects/CO/COSyllabus.html";
}
function startCounter() {
  if (flag) {
    timer1 = setInterval(incAccount, 10);
    timer2 = setInterval(incResource, 10);
    timer3 = setInterval(incProject, 10);
    flag = false;
  }
}
function incAccount() {
  acc.textContent = n;
  if (n == 100) {
    clearInterval(timer1);
    acc.textContent += "+";
    n = 0;
  }
  n++;
}
function incResource() {
  res.textContent = n;
  if (n == 250) {
    clearInterval(timer2);
    res.textContent += "+";
    n = 0;
  }
  n++;
}
function incProject() {
  proj.textContent = n;
  if (n == 25) {
    clearInterval(timer3);
    proj.textContent += "+";
  }
  n++;
}
//Search Suggestion Function
var searchList = document.getElementsByClassName("search-item");
var searchValue;
function showSuggestions(search) {
  searchValue = search.value.toLowerCase();
  if (searchValue != "" || searchValue != null) {
    display(".search-suggestion", "block");
    for (let i = 0; i < searchList.length; i++) {
      if (searchList[i].textContent.toLowerCase().indexOf(searchValue) != -1) {
        searchList[i].style.display = "block";
      } else {
        searchList[i].style.display = "none";
      }
    }
  } else {
    display(".search-suggestion", "none");
  }
}
//Form Validations
function changeColor(element, color) {
  element.style.color = color;
}
var list = document.getElementsByClassName("password-rules");
var li = new Array(4);
var pw = document.getElementById("password");
for (let i = 1; i < 5; i++) {
  li[i - 1] = document.getElementById(`rule${i}`);
}

var pw = document.getElementById("password");
var pwValidity = 0;
function errorBorder(element, flag) {
  if (flag) element.style.border = "1px solid red";
  else element.style.border = "1px solid var(--color3)";
}
function checkPassword() {
  var pwRegex1 = /[A-Z]+/;
  var pwRegex2 = /[0-9]+/;
  var pwRegex3 = /[^A-Za-z0-9]+/;
  var pwRegex4 = /[a-z]+/;
  if (pwRegex1.test(pw.value)) {
    changeColor(li[1], "green");
    pwValidity++;
  } else {
    changeColor(li[1], "red");
    pwValidity--;
  }
  if (pwRegex2.test(pw.value)) {
    changeColor(li[2], "green");
    pwValidity++;
  } else {
    changeColor(li[2], "red");
    pwValidity--;
  }
  if (pwRegex3.test(pw.value)) {
    changeColor(li[3], "green");
    pwValidity++;
  } else {
    changeColor(li[3], "red");
    pwValidity--;
  }
  if (pwRegex4.test(pw.value)) {
    if (pw.value.length >= 8 && pw.value.length <= 16) {
      changeColor(li[0], "green");
      pwValidity++;
    } else {
      changeColor(li[0], "red");
      pwValidity--;
    }
  }
}

function checkSpecify() {
  const professionSelect = document.getElementById("profession");
  if (professionSelect.value === "other") {
    display("#other-profession", "block");
  } else {
    display("#other-profession", "none");
  }
}
function checkName(name) {
  var regex = /^[A-Za-z ]{2,25}$/;
  if (!regex.test(name.value)) {
    errorBorder(name, true);
  } else {
    errorBorder(name, false);
  }
}
function checkUsername(username) {
  var regex = /^[a-z0-9._]{5,20}$/;
  if (!regex.test(username.value)) {
    errorBorder(username, true);
  } else {
    errorBorder(username, false);
  }
}
function checkAge(age) {
  if (!(age.value >= 10 && age.value <= 100)) {
    errorBorder(age, true);
  } else {
    errorBorder(age, false);
  }
}
function checkConfirmPassword(cpw) {
  if (pw.value !== cpw.value) {
    errorBorder(cpw, true);
  } else {
    errorBorder(cpw, false);
  }
}
//Create Account
function createAccount() {
  event.preventDefault();
  localStorage.setItem("Username", document.getElementById("username").value);
  window.history.back();
}
