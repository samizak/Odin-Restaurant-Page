export default function createLogo() {
  const logo = document.createElement("h3");
  const logoFirstSpan = document.createElement("span");
  const logoSecondSpan = document.createElement("span");

  logoFirstSpan.textContent = "Sami's ";
  logoSecondSpan.textContent = "Cooking";

  logo.setAttribute("class", "logo");

  logo.append(logoFirstSpan, logoSecondSpan);

  return logo;
}
