const menu = document.querySelector(".menu");
const btnMenu = document.querySelector(".menu-toggle");
const xIcon = document.getElementById("x-icon");
const menuIcon = document.querySelector(".menu-icon");

const menuLinks = document.querySelectorAll(".menu-link");

const toggleMenu = () => {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
};

btnMenu.addEventListener("click", toggleMenu);

menuLinks.forEach((menuLink) => menuLink.addEventListener("click", toggleMenu));
