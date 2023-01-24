const menu = document.querySelector(".menu");
const desktopMenu = document.querySelector(".desktop-menu");
const createMessage = document.querySelector("#createMessage");
const desktopCreateMessage = document.querySelector("#desktopCreateMessage");
const myMessage = document.querySelector("#myMessage");
const desktopMyMessage = document.querySelector("#desktopMyMessage");
const seeAllMessage = document.querySelector("#seeAllMessage");
const desktopSeeAllMessage = document.querySelector("#desktopSeeAllMessage");

menu.addEventListener("click", toggleDesktopMenu);
createMessage.addEventListener("click", toggleDesktopCreateMessage);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleDesktopCreateMessage() {
  if (!desktopCreateMessage.classList.toggle("inactive-createMessage")) {
    console.log("existe");
    document.getElementById("desktopCreateMessage").style.display = "none";
  } else {
    console.log("No exsite");
    document.getElementById("desktopCreateMessage").style.display = "block";
  }
}
