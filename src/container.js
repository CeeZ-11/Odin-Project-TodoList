import "./container.css";
import { Aside } from "./aside.js";
import { Content } from "./content.js";

export function Container() {
  const asideDiv = Aside();
  const contentDiv = Content();

  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  document.body.appendChild(containerDiv);

  containerDiv.appendChild(asideDiv);
  containerDiv.appendChild(contentDiv);

  containerDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("btnTasks")) {
      // Remove the active class from all buttons
      const buttons = containerDiv.querySelectorAll(".btnTasks");
      buttons.forEach((btn) => btn.classList.remove("btnActive"));

      // Add the active class to the clicked button
      event.target.classList.add("btnActive");
    }
  });
}
