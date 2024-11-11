import { format } from "date-fns";
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
    taskDiv.appendChild(btnTask);

    document.querySelector(".table-body").appendChild(taskDiv);
    this.logTask;
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
          btnTask.textContent = task.title;
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
