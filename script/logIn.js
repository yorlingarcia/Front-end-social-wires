const userLocal = localStorage.getItem("record_user").split(",");
const users = [];

for (let i = 0; i < userLocal.length; i = i + 4) {
  users.push({
    nickName: userLocal[i],
    name: userLocal[i + 1],
    email: userLocal[i + 2],
    password: Number(userLocal[i + 3]),
  });
}

const btnSignIn = document.querySelector("#botonSignIn");
const email = document.getElementById("email");
const password = document.getElementById("password");

btnSignIn.addEventListener("click", validation);

function validation() {
  let user = users.filter((element) => element.email == email.value);
  if (user) {
    if (user[0].password == password.value) {
      window.location.href = "./../html/interfaceUser.html";
    } else {
      window.alert("Usuario o contraseña incorrecta");
    }
  }
}
