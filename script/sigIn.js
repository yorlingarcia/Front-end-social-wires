const btnCreate = document.querySelector("#botonCreate");
const nickName = document.querySelector("#nickName");

// Escuchar el evento
btnCreate.addEventListener("click", dateRecipe);

function dateRecipe() {
  console.log(nickName.value);
}
