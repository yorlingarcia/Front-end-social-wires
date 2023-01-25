const menu = document.querySelector(".menu");
const desktopMenu = document.querySelector(".desktop-menu");
const createMessage = document.querySelector("#createMessage");
const desktopCreateMessage = document.querySelector("#desktopCreateMessage");
const myMessage = document.querySelector("#myMessage");
const desktopMyMessage = document.querySelector("#desktopMyMessage");
const seeAllMessage = document.querySelector("#seeAllMessages");
const desktopSeeAllMessages = document.querySelector("#desktopSeeAllMessages");

// inicializacion de tags para mostrar la forma inicial y definir valores
desktopCreateMessage.style.display = "block";
desktopMyMessage.style.display = "none";
desktopSeeAllMessages.style.display = "none";

// Escuchar el evento
menu.addEventListener("click", toggleDesktopMenu);
createMessage.addEventListener("click", toggleDesktopCreateMessage);
myMessage.addEventListener("click", toggleDesktopMyMessage);
seeAllMessage.addEventListener("click", toggleDesktopSeeAllMessage);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleDesktopCreateMessage() {
  if (desktopCreateMessage.style.display == "none") {
    desktopCreateMessage.style.display = "block";
    desktopMyMessage.style.display = "none";
    desktopSeeAllMessages.style.display = "none";
  }
}

function toggleDesktopMyMessage() {
  if (desktopMyMessage.style.display == "none") {
    desktopMyMessage.style.display = "block";
    desktopCreateMessage.style.display = "none";
    desktopSeeAllMessages.style.display = "none";
  }
}

function toggleDesktopSeeAllMessage() {
  if (desktopSeeAllMessages.style.display == "none") {
    desktopSeeAllMessages.style.display = "block";
    desktopCreateMessage.style.display = "none";
    desktopMyMessage.style.display = "none";
  }
}
