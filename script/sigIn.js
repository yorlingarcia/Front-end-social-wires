const btnCreate = document.querySelector("#botonCreate");
const nickName = document.querySelector("#nickName");
const Name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

let userLocal = localStorage.getItem("record_user");
if (!userLocal) {
  userLocal = [];
} else {
  userLocal = [userLocal];
}

// Escuchar el evento
btnCreate.addEventListener("click", dateRecipe);

function dateRecipe() {
  userLocal.push([nickName.value, Name.value, email.value, password.value]);
  localStorage.setItem("record_user", userLocal);
  window.location.href = "./../html/logIn.html";
}
