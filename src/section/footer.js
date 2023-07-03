export default function createFooter() {
  const footer = document.createElement("footer");
  const footerText = document.createElement("p");

  const curYear = new Date().getFullYear();
  footerText.textContent = `Copyright © ${curYear} samizak`;

  footer.append(footerText);

  return footer;
}
