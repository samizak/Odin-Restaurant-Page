export default function createHome() {
  const main = document.createElement("main");
  const pWelcome = document.createElement("p");
  const h1 = document.createElement("h1");
  const h3 = document.createElement("h3");
  const homeButtons = document.createElement("div");
  const btnOurMenu = document.createElement("button");
  const btnGetInTouch = document.createElement("button");

  pWelcome.textContent = "Welcome to Sami's Restaurant";
  h1.textContent = "Eat healthy and Natural Food";
  h3.innerHTML = `Sami's Cooking is a restaurant, bar and coffee roastery located on
    Ivory Coast. <br />We have awesome recipes and the most talented chefs in town.`;

  homeButtons.setAttribute("class", "home-btn");
  btnOurMenu.textContent = "MENU";
  btnOurMenu.setAttribute("id", "menuBtn");
  btnGetInTouch.textContent = "GET IN TOUCH";
  btnGetInTouch.setAttribute("id", "contactBtn");
  homeButtons.append(btnOurMenu, btnGetInTouch);

  main.append(pWelcome, h1, h3, homeButtons);

  return main;
}
