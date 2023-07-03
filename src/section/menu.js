export default function createMenu() {
  const menuSection = document.createElement("section");

  const title = document.createElement("h1");
  title.className = "menu-title";
  title.textContent = "Menu";

  const lineBreak1 = document.createElement("hr");
  const lineBreak2 = document.createElement("hr");
  const lineBreak3 = document.createElement("hr");
  const lineBreak4 = document.createElement("hr");

  lineBreak2.setAttribute("class", "menu-hr");
  lineBreak3.setAttribute("class", "menu-hr");
  lineBreak4.setAttribute("class", "menu-hr");

  const item1 = document.createElement("div");
  const item2 = document.createElement("div");
  const item3 = document.createElement("div");

  item1.setAttribute("class", "menu-item");
  item2.setAttribute("class", "menu-item");
  item3.setAttribute("class", "menu-item");

  const item1_title = document.createElement("h2");
  const item2_title = document.createElement("h2");
  const item3_title = document.createElement("h2");

  item1_title.textContent = "Item 1";
  item2_title.textContent = "Item 2";
  item3_title.textContent = "Item 3";

  const item1_description = document.createElement("p");
  const item2_description = document.createElement("p");
  const item3_description = document.createElement("p");

  item1_description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet";
  item2_description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet";
  item3_description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet";

  item1.append(item1_title, item1_description);
  item2.append(item2_title, item2_description);
  item3.append(item3_title, item3_description);

  menuSection.append(title, lineBreak1, item1, lineBreak2, item2, lineBreak3, item3, lineBreak4);

  return menuSection;
}
