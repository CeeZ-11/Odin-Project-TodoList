import "./content.css";
import { Projects } from "./projects";
import { Task } from "./task.js";
import { format, addDays } from "date-fns";
import { InfoModal } from "./infoModal.js";

const infoModal = InfoModal();
export function Content() {
  let num = 0;
  let contentTable = 0;
  let sanitizedClass = "";
  let { selectedProject } = Projects();

  // create formatted dates array
  const today = new Date();

  // Create an array with the next 7 days, including today
  const dates = Array.from({ length: 7 }, (_, index) => addDays(today, index));

  // Initialize an empty array to store the formatted dates
  const formattedDatesArray = dates.map((date) =>
    format(date, "EEEE, yyyy-MM-dd")
  );

  const { displayProjectsModal } = Projects();
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("contentHeader");
  headerDiv.textContent = "Today's Tasks"; // Set your desired title here
  contentDiv.appendChild(headerDiv);

  const tableContainer = document.createElement("div");
  tableContainer.classList.add("table-content");
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

      // Adds class to display info table on the right side
      if (contentTable != 1 && i === 1) {
        body.classList.add("table-display-info");
      }

      const footer = document.createElement("div");
      footer.classList.add("table-footer");
      table.appendChild(header);
      table.appendChild(body);
      table.appendChild(footer);

      const form = document.createElement("form");
      form.action = "";
      form.method = "get";
      form.id = "form-footer";
      footer.appendChild(form);

      function createAddTaskForm() {
        const inputFooterDiv = document.createElement("div");
        inputFooterDiv.id = "input-footer-div";

        let svgProject;

        if (contentTable != 1 && contentTable != 3) {
          svgProject = document.createElement("svg");
          svgProject.classList.add("svg-project");
          svgProject.setAttribute("data-project", selectedProject);
          inputFooterDiv.appendChild(svgProject);

          svgProject.addEventListener("click", () => {
            displayProjectsModal();
          });
        }

        const footerInput = document.createElement("input");
        footerInput.type = "text";
        footerInput.id =
          contentTable != 1 && contentTable != 3 ? "input-footer" : "input";
        footerInput.name = "title";
        footerInput.placeholder = "Add Task";
        footerInput.pattern = "^[a-zA-Z\\s]+$";
        footerInput.size = "15";
        footerInput.maxLength = "245";
        footerInput.required = true;

        if (contentTable == 1) {
          footerInput.setAttribute("data-date", formattedDatesArray[i]);
        } else if (contentTable == 0) {
          footerInput.setAttribute("data-date", formattedDatesArray[0]);
        }

        inputFooterDiv.appendChild(footerInput);
        form.appendChild(inputFooterDiv);

        const buttonDiv = document.createElement("div");
        buttonDiv.id = "button-div";
        form.appendChild(buttonDiv);

        const addTaskButton = document.createElement("button");
        addTaskButton.id = "add-task-button";
        addTaskButton.textContent = "Add";
        addTaskButton.type = "submit";
        addTaskButton.autofocus = true;

        buttonDiv.appendChild(addTaskButton);

        form.onsubmit = (event) => {
          event.preventDefault();

          const taskTitle = footerInput.value;

          let taskTag = "";
          let newDateInput = footerInput.getAttribute("data-date");
          let taskDueDate = newDateInput
            ? newDateInput.split(",")[1].trim()
            : null;

          // assign to new variable taskSubject the value of svgProject data attribute
          let taskSubject = svgProject
            ? svgProject.getAttribute("data-project")
            : null;

          //  new instance of Task
          function newTaskInstance() {
            new Task(taskTitle, taskSubject, taskTag, taskDueDate);
          }

          // assign to new variable task  and call displaytask function
          if (contentTable == 3) {
            taskSubject = tableTitle;
            newTaskInstance();
            Task.displayTasksByProject(taskSubject);
          } else if (contentTable == 4) {
            taskTag = tableTitle;
            newTaskInstance();
            Task.displayTasksByTag(taskTag);
          } else if (contentTable == 1) {
            newTaskInstance();
            Task.displayTasksByDate(taskDueDate);
          } else if (contentTable == 0) {
            newTaskInstance();
            Task.displayTasksByToday(taskDueDate);
          } else {
            newTaskInstance();
            Task.displayAllTasks();
          }
          footerInput.value = "";
        };
      }

      if (contentTable == 1) {
        tableContainer.classList.remove("table-content-not-weekly");
        header.textContent = `${formattedDatesArray[i]}`;
        sanitizedClass = header.textContent.split(",")[1].trim();
        header.classList.add("weeksTable");
        body.classList.add(sanitizedClass);
        body.classList.add("table-content-weekly");
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
    // ERROR HERE!!!!!!!!!!!!!!!!

    // Adds add event listener for task if click will display task info to the table on the right
    //document.addEventListener("click", (event) => {});
  }

  return { num, contentTable, contentDiv, createTable };
}
