import "./container.css";
import { Aside } from "./aside.js";
import { Content } from "./content.js";

export function Container() {
  let tableTitle = "";
  const asideDiv = Aside();
  const { contentDiv, createTable } = Content();
  let { num, contentTable } = Content();

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

      // Optional: If the btnweek-tasks is clicked, add tables dynamically
      if (event.target.classList.contains("btnweek-tasks")) {
        num = 6;
        contentTable = 1;
      } else if (event.target.classList.contains("btnall-tasks")) {
        num = 1;
        contentTable = 2;
      } else if (event.target.classList.contains("btnProject")) {
        num = 1;
        contentTable = 3;
        tableTitle = event.target.textContent;
      } else if (event.target.classList.contains("btnTag")) {
        num = 1;
        contentTable = 4;
        tableTitle = event.target.textContent;
      } else {
        num = 1;
        contentTable = 0;
      }

      createTable(num, contentTable, tableTitle);
    }
  });
}
