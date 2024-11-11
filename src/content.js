import "./content.css";
import { Projects } from "./projects";
import { Task } from "./task.js";

let tasks = [];
export function Content() {
  let num = 0;
  let contentTable = 0;
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const { displayProjectsModal } = Projects();
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");

  // Create header section for the title
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("contentHeader");
  headerDiv.textContent = "Today's Tasks"; // Set your desired title here
  contentDiv.appendChild(headerDiv);

  // Create table container
  const tableContainer = document.createElement("div");
  tableContainer.classList.add("table-content");

  // Append tableContainer to contentDiv
  contentDiv.appendChild(tableContainer);

  function createTable(num, contentTable, tableTitle) {
    tableContainer.innerHTML = "";

    for (let i = 0; i <= num; i++) {
      const table = document.createElement("table");
      table.classList.add("table");
      const header = document.createElement("div");
      header.classList.add("table-header");
      const body = document.createElement("div");
      body.classList.add("table-body");
      const footer = document.createElement("div");
      footer.classList.add("table-footer");
      table.appendChild(header);
      table.appendChild(body);
      table.appendChild(footer);

      // Create add task form
      const form = document.createElement("form");
      form.action = "";
      form.method = "get";
      form.id = "form-footer";

      footer.appendChild(form);

      function createAddTaskForm() {
        // Create input for task
        const inputFooterDiv = document.createElement("div");
        inputFooterDiv.id = "input-footer-div";

        // Create svg project except for weeks tasks
        if (contentTable != 1 && contentTable != 3) {
          const svgProject = document.createElement("svg");
          svgProject.classList.add("svg-project");
          inputFooterDiv.appendChild(svgProject);

          svgProject.addEventListener("click", () => {
            displayProjectsModal();
          });
        }

        const footerInput = document.createElement("input");
        footerInput.type = "text";

        // Assign specific style for weeks tasks input
        if (contentTable != 1 && contentTable != 3)
          footerInput.id = "input-footer";
        if (contentTable == 1) footerInput.id = "input";

        footerInput.name = "title";
        footerInput.placeholder = `Add Task`;
        footerInput.pattern = "^[a-zA-Z\\s]+$";
        footerInput.size = "15";
        footerInput.maxLength = "245";
        footerInput.required = true;

        inputFooterDiv.appendChild(footerInput);
        form.appendChild(inputFooterDiv);

        const buttonDiv = document.createElement("div");
        buttonDiv.id = "button-div";
        form.appendChild(buttonDiv);

        // Create button
        const addTaskButton = document.createElement("button");
        addTaskButton.id = "add-task-button";
        addTaskButton.textContent = "Add";
        addTaskButton.type = "submit";
        addTaskButton.autofocus = true;

        buttonDiv.appendChild(addTaskButton);

        form.onsubmit = (event) => {
          event.preventDefault(); // Prevent the form from refreshing the page

          const taskTitle = footerInput.value;
          const taskDescription = ""; // Add any description field if needed
          const taskDueDate = ""; // You can add a date input to collect this
          const taskProject = ""; // Add logic to determine the project if needed
          const taskNote = ""; // Add logic for task notes if needed
          const taskTag = ""; // Add logic for task tags if needed
          const taskCompleted = false; // Set default to false for new tasks

          // Create a new task
          const newTask = new Task(
            taskTitle,
            taskDescription,
            taskDueDate,
            taskProject,
            taskNote,
            taskTag,
            taskCompleted
          );

          newTask.logTask();

          footerInput.value = "";
        };
      }

      if (contentTable == 1) {
        tableContainer.classList.remove("table-content-not-weekly");
        header.textContent = `${days[i]}`;
        headerDiv.textContent = "Week's Tasks";
        createAddTaskForm();
      } else if (contentTable == 0 && i == 0) {
        tableContainer.classList.add("table-content-not-weekly");
        header.textContent = "Today";
        headerDiv.textContent = "Today's Tasks";
        createAddTaskForm();
      } else if (contentTable == 2 && i == 0) {
        tableContainer.classList.add("table-content-not-weekly");
        header.textContent = `All My Tasks`;
        headerDiv.textContent = "All My Tasks";
        createAddTaskForm();
      } else if (contentTable == 3 && i == 0) {
        tableContainer.classList.add("table-content-not-weekly");
        header.textContent = "Tasks";
        headerDiv.textContent = `Project ${tableTitle}`;
        createAddTaskForm();
      } else if (contentTable == 4 && i == 0) {
        tableContainer.classList.add("table-content-not-weekly");
        header.textContent = "Tasks";
        headerDiv.textContent = `Tag ${tableTitle}`;
        createAddTaskForm();
      }

      tableContainer.appendChild(table);
    }
  }

  return { num, contentTable, contentDiv, createTable };
}
