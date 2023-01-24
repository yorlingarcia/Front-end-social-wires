const menu = document.querySelector(".menu");
const desktopMenu = document.querySelector(".desktop-menu");

menu.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
