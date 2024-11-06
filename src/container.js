import "./container.css";
import { Aside } from "./aside.js";
import { Content } from "./content.js";

export function Container() {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  document.body.appendChild(containerDiv);

  const asideDiv = Aside();
  const contentDiv = Content();

  containerDiv.appendChild(asideDiv);
  containerDiv.appendChild(contentDiv);
}
