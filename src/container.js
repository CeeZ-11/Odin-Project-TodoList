import "./container.css";
import { Aside } from "./aside.js";
import { Content } from "./content.js";
import { Projects } from "./projects.js";
import { Task } from "./task.js";

export function Container() {
  let tableTitle = "";
  const { displayProjectsAside } = Projects();
  const asideDiv = Aside();
  const { contentDiv, createTable } = Content();
  let { num, contentTable } = Content();

  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  document.body.appendChild(containerDiv);

  containerDiv.appendChild(asideDiv);
  displayProjectsAside();
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
        tableTitle = tableTitle.replace("#", "");
        console.log("tableTitle :  " + tableTitle);
      } else {
        num = 1;
        contentTable = 0;
      }

      createTable(num, contentTable, tableTitle);

      if (contentTable === 2) {
        Task.displayAllTasks();
      } else if (contentTable === 3) {
        Task.displayTasksByProject(tableTitle);
      } else if (contentTable === 4) {
        Task.displayTasksByTag(tableTitle);
      } else if (contentTable === 1) {
        let allWeeks = document.querySelectorAll("input");

        Array.from(allWeeks).forEach((week) => {
          // Get the data-date attribute of each week element
          let dateAttribute = week.getAttribute("data-date");

          if (dateAttribute) {
            // Use split and trim on the data-date attribute value
            let formattedDate = dateAttribute.split(",")[1].trim();

            Task.displayTasksByDate(formattedDate);
          }
        });
      } else if (contentTable === 0) {
        let today = document.querySelector("input");
        let formattedDate = today
          .getAttribute("data-date")
          .split(",")[1]
          .trim();

        Task.displayTasksByToday(formattedDate);
      }
    }
  });
}
