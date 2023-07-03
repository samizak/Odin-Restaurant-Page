import "./css/main.css";
import createHeader from "./section/header";
import createHome from "./section/home";
import createMenu from "./section/menu";
import createContact from "./section/contact";
import createFooter from "./section/footer";

const content = document.getElementById("content");

content.append(createHeader(), createHome(), createFooter());
const menuItems = document.querySelectorAll(".header-menu-item");

let menuBtn = document.getElementById("menuBtn");
let contactBtn = document.getElementById("contactBtn");

function setActiveMenu(newActive) {
  const currentActive = document.getElementsByClassName("selected");
  if (newActive != currentActive) {
    currentActive[0].classList.toggle("selected");
    newActive.classList.toggle("selected");
  }
}
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (e) => {
    setActiveMenu(e.target);

    switch (e.target.textContent) {
      case "MENU":
        content.replaceChild(createMenu(), content.childNodes[1]);
        break;

      case "CONTACT":
        content.replaceChild(createContact(), content.childNodes[1]);
        break;

      default:
        content.replaceChild(createHome(), content.childNodes[1]);
    }
  });
});

console.log(menuBtn);

menuBtn.addEventListener("click", () => {
  setActiveMenu(menuItems[1]);
  content.replaceChild(createMenu(), content.childNodes[1]);
});

contactBtn.addEventListener("click", () => {
  setActiveMenu(menuItems[2]);
  content.replaceChild(createContact(), content.childNodes[1]);
});
