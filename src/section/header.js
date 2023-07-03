import createLogo from "../components/createLogo";

export default function createHeader() {
  const header = document.createElement("header");

  const menu = document.createElement("ul");

  const menuHome_li = document.createElement("li");
  const menuOurMenu_li = document.createElement("li");
  const menuContact_li = document.createElement("li");

  const menuHome = document.createElement("a");
  const menuOurMenu = document.createElement("a");
  const menuContact = document.createElement("a");

  menuHome.textContent = "HOME";
  menuOurMenu.textContent = " MENU";
  menuContact.textContent = "CONTACT";

  menu.setAttribute("class", "navbar");
  menuHome.classList.add("menu-item");
  menuHome.classList.add("selected");
  menuOurMenu.classList.add("menu-item");
  menuContact.classList.add("menu-item");

  menuHome_li.append(menuHome);
  menuOurMenu_li.append(menuOurMenu);
  menuContact_li.append(menuContact);

  menu.append(menuHome_li, menuOurMenu_li, menuContact_li);
  header.append(createLogo(), menu);

  return header;
}
