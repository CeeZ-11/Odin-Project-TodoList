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

  const buttons = document.querySelectorAll(".btnTasks");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("btnActive"));
      button.classList.add("btnActive");
    });
  });
}
