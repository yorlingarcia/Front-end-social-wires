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
  let user = users.find((element) => element.email == email.value);
  console.log(password.value);
  console.log(user);
  if (user) {
    let usuario = users.filter((element) => element.email == email.value);
    if (usuario[0].password == password.value) {
      localStorage.setItem("record_usuario", usuario[0].name);
      window.location.href = "./../html/interfaceUser.html";
    } else {
      window.alert("Contraseña incorrecta");
    }
  } else {
    window.alert("El usuario no existe");
  }
}
