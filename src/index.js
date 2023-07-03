import "./css/main.css";
import createHeader from "./section/header";
import createHome from "./section/home";

const content = document.getElementById("content");
content.append(createHeader(), createHome());

content.replaceChild(createHome(), content.childNodes[1], null);
