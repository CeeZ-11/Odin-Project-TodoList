import { format } from "date-fns";
import { Projects } from "./projects.js";
import { InfoModal } from "./infoModal.js";
import { tags } from "./tags.js";

const infoModal = InfoModal();
let { selectedProject } = Projects();
let taskInfoTable;
export class Task {
  static tasksObject = {}; // Static property to store all tasks by ID

  constructor(
    title,
    project,
    tag,
    duedate,
    description = "",
    note = "",
    completed = false
  ) {
    this.title = title || ""; // Default to an empty string if no title
    this.description = description;
    this.duedate = duedate || format(new Date(), "yyyy-MM-dd");
    this.project = project || "";
    this.note = note;
    this.tag = tag;
    this.completed = completed;
    this.id = Date.now(); // Unique ID for the task

    // Store the new task in the static tasksObject
    Task.tasksObject[this.id] = this;
  }

  logTask() {
    console.log(`Task ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`Due Date: ${this.duedate}`);
    console.log(`Project: ${this.project}`);
    console.log(`Note: ${this.note}`);
    console.log(`Tag: ${this.tag}`);
    console.log(`Completed: ${this.completed}`);
  }

  displayTask() {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.id = `task-${this.id}`;

    const btnTask = document.createElement("button");
    btnTask.textContent = this.title;
    btnTask.classList.add("btnTask");
    btnTask.setAttribute("data-task-id", this.id);
    taskDiv.appendChild(btnTask);

    document.querySelector(".table-body").appendChild(taskDiv);
    this.logTask;
  }

  static getInfoModalProject(getId, returnProject) {
    const getIdAsString = String(getId);

    for (const taskId in Task.tasksObject) {
      const task = Task.tasksObject[taskId];

      if (task.id == getIdAsString) {
        // Compare the task's id property with getId
        task.project = returnProject; // Update the project property
      }
    }

    // Change project to selected project in the display task info table
    const projectInfo = document.querySelector(".project-info");
    projectInfo.textContent = `Project: ${returnProject}`;
  }

  static getInfoModalTag(getId, returnTag) {
    const getIdAsString = String(getId);

    for (const taskId in Task.tasksObject) {
      const task = Task.tasksObject[taskId];
      if (task.id == getIdAsString) {
        // Compare the task's id property with getId
        task.tag = returnTag; // Update the tag property
      }

      // Change tag to selected tag in the display task info table
      const tagInfo = document.querySelector(".tag-info");
      tagInfo.textContent = `Tag: ${returnTag}`;
    }
  }

  static displayTaskInfo(task) {
    const btnAllTask = document.querySelector(".btnall-tasks");
    const tableBody = document.querySelector(".table-body");

    const btnWeekly = document.querySelector(".btnweek-tasks");

    if (btnWeekly && btnWeekly.classList.contains("btnActive")) {
      taskInfoTable = document.querySelector(".modal-weekly-info");
      taskInfoTable.innerHTML = "";

      // if background modal is selected close modal
      const modalBackContainer = document.querySelector(
        ".modal-weekly-back-container"
      );

      modalBackContainer.addEventListener("click", () => {
        modalBackContainer.remove();
        taskInfoTable.remove();
      });
    } else {
      taskInfoTable = document.querySelector(".table-display-info");
      taskInfoTable.innerHTML = "";
    }

    const taskInfoDiv = document.createElement("div");
    taskInfoDiv.classList.add("task-info-container");

    const taskInfoHeader = document.createElement("div");
    taskInfoHeader.textContent = "Task Information";
    taskInfoHeader.classList.add("task-info-header");
    taskInfoDiv.appendChild(taskInfoHeader);

    const taskInfoBody = document.createElement("div");
    taskInfoBody.classList.add("task-info-body");
    taskInfoDiv.appendChild(taskInfoBody);

    const taskId = document.createElement("h4");
    taskId.textContent = task.id;
    taskInfoHeader.appendChild(taskId);

    const taskCompleted = document.createElement("button");
    taskCompleted.textContent = task.completed
      ? "Completed"
      : "Mark as complete";
    taskCompleted.classList.add("task-completed");
    taskInfoHeader.appendChild(taskCompleted);

    const taskTitleDiv = document.createElement("div");
    taskTitleDiv.classList.add("task-title-div");
    taskInfoBody.appendChild(taskTitleDiv);

    const taskTitle = document.createElement("textarea");
    taskTitle.textContent = task.title;
    taskTitleDiv.appendChild(taskTitle);

    const taskDateProjTagDiv = document.createElement("div");
    taskDateProjTagDiv.classList.add("task-date-proj-tag-div");
    taskInfoBody.appendChild(taskDateProjTagDiv);

    const taskDate = document.createElement("input");
    taskDate.value = task.duedate;
    taskDate.type = "date";
    taskDateProjTagDiv.appendChild(taskDate);

    const taskDateSvg = document.createElement("svg");
    taskDateSvg.classList.add("taskDateSvg");
    taskDate.appendChild(taskDateSvg);

    const taskProject = document.createElement("button");
    taskProject.textContent = `Project: ${task.project}`;
    taskProject.classList.add("project-info");
    taskDateProjTagDiv.appendChild(taskProject);

    const taskProjectSvg = document.createElement("svg");
    taskProjectSvg.classList.add("taskProjectSvg");
    taskProject.appendChild(taskProjectSvg);

    const taskTag = document.createElement("button");
    taskTag.textContent = `Tag: ${task.tag}`;
    taskTag.classList.add("tag-info");
    taskDateProjTagDiv.appendChild(taskTag);

    const taskTagSvg = document.createElement("svg");
    taskTagSvg.classList.add("taskTagSvg");
    taskTag.appendChild(taskTagSvg);

    const taskDescDiv = document.createElement("div");
    taskDescDiv.classList.add("task-desc-div");
    taskInfoBody.appendChild(taskDescDiv);

    const taskDescHeader = document.createElement("h4");
    taskDescHeader.textContent = "Description";
    taskDescDiv.appendChild(taskDescHeader);

    const taskDesc = document.createElement("textarea");
    taskDesc.textContent = task.description;
    taskDescDiv.appendChild(taskDesc);

    const taskNoteDiv = document.createElement("div");
    taskNoteDiv.classList.add("task-note-div");
    taskInfoBody.appendChild(taskNoteDiv);

    const taskNoteHeader = document.createElement("h4");
    taskNoteHeader.textContent = "Note";
    taskNoteDiv.appendChild(taskNoteHeader);

    const taskNote = document.createElement("textarea");
    taskNote.textContent = task.note;
    taskNoteDiv.appendChild(taskNote);

    const taskDelete = document.createElement("button");
    taskDelete.textContent = "Delete";
    taskDelete.classList.add("task-delete");

    taskInfoBody.appendChild(taskDelete);

    taskDelete.addEventListener("click", () => {
      // Remove the task from the DOM
      const taskDiv = document.getElementById(`task-${task.id}`);
      taskDiv.remove();
      // Remove the task from the static tasksObject
      delete Task.tasksObject[task.id];
      taskInfoTable.innerHTML = "";
    });

    taskCompleted.addEventListener("click", () => {
      task.completed = !task.completed;
      taskCompleted.textContent = task.completed
        ? "Completed"
        : "Mark as complete";
    });

    taskTitle.addEventListener("blur", () => {
      task.title = taskTitle.value;

      tableBody.innerHTML = "";
      if (btnAllTask.classList.contains("btnActive")) {
        Task.displayAllTasks();
      } else {
        Task.displayTasksByToday(task.duedate);
      }
    });

    taskDate.addEventListener("click", () => {
      taskDate.addEventListener("change", () => {
        taskDate.textContent = `Due Date: ${taskDate.value}`;
        task.duedate = taskDate.value;
      });
    });

    taskProject.addEventListener("click", () => {
      selectedProject = task.project;
      infoModal.infoModalProject(selectedProject);
    });

    taskTag.addEventListener("click", () => {
      if (tags != null && tags.length > 0) {
        let selectedTag = taskTag.value;
        console.log("selectedTag: " + selectedTag);
        infoModal.infoModalTag(selectedTag);
      }
    });

    taskDesc.addEventListener("blur", () => {
      task.description = taskDesc.value;
    });

    taskNote.addEventListener("blur", () => {
      task.note = taskNote.value;
    });

    taskInfoTable.appendChild(taskInfoDiv);
  }

  static displayAllTasks() {
    const tableBody = document.querySelector(".table-body");
    tableBody.innerHTML = ""; // Clear existing tasks in the DOM

    for (const taskId in Task.tasksObject) {
      const task = Task.tasksObject[taskId];
      task.displayTask(); // Use each task’s display method to add it to the DOM
    }
  }

  static displayTasksByProject(projectName) {
    const tableBody = document.querySelector(".table-body");
    tableBody.innerHTML = ""; // Clear existing tasks in the DOM

    for (const taskId in Task.tasksObject) {
      const task = Task.tasksObject[taskId];
      if (task.project === projectName) {
        task.displayTask(); // Display the task if it matches the project
      }
    }
  }
  static displayTasksByTag(tagName) {
    const tableBody = document.querySelector(".table-body");
    tableBody.innerHTML = ""; // Clear existing tasks in the DOM

    for (const taskId in Task.tasksObject) {
      const task = Task.tasksObject[taskId];
      if (task.tag === tagName) {
        task.displayTask(); // Display the task if it matches the tag
      }
    }
  }
  static displayTasksByDate(date) {
    // Ensure date is a string
    const dateStr = String(date);

    // Find elements by class name directly
    const tableBodies = document.getElementsByClassName(dateStr);

    if (tableBodies.length > 0) {
      const tableBody = tableBodies[0]; // Use the first matching element
      tableBody.innerHTML = ""; // Clear existing tasks in the DOM

      for (const taskId in Task.tasksObject) {
        const task = Task.tasksObject[taskId];
        if (task.duedate === dateStr) {
          const taskDiv = document.createElement("div");
          taskDiv.classList.add("task");
          taskDiv.id = `task-${taskId}`;

          const btnTask = document.createElement("button");
          btnTask.setAttribute("data-task-id", taskId);
          btnTask.textContent = task.title;
          btnTask.classList.add("btnTaskWeekly");
          taskDiv.appendChild(btnTask);

          tableBody.appendChild(taskDiv); // Display the task if the due date matches
        }
      }
    }
  }

  static displayTasksByToday(date) {
    const tableBody = document.querySelector(".table-body");
    tableBody.innerHTML = ""; // Clear existing tasks in the DOM

    for (const taskId in Task.tasksObject) {
      const task = Task.tasksObject[taskId];
      if (task.duedate === date) {
        task.displayTask(); // Display the task if it matches the tag
      }
    }
  }
}
