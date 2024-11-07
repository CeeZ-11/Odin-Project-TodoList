import "./aside.css";
import { Modal } from "./modal.js";
export function Aside() {
  const asideContainer = document.createElement("aside");

  //--------------------------------------------------------------
  //create aside account
  const asideAccount = document.createElement("div");
  asideAccount.classList.add("aside-account");
  asideContainer.appendChild(asideAccount);

  // Create aside account icon
  const asideAccountIcon = document.createElement("svg");
  asideAccountIcon.classList.add("aside-account-icon");
  asideAccount.appendChild(asideAccountIcon);

  //create aside account user
  const asideAccountUser = document.createElement("h2");
  asideAccountUser.textContent = "Seamor";
  asideAccount.appendChild(asideAccountUser);

  //--------------------------------------------------------------
  // Create aside option for viewing
  const asideOptionDiv = document.createElement("div");
  asideOptionDiv.classList.add("aside-option");
  asideContainer.appendChild(asideOptionDiv);

  // Create ul
  const asideOptionUl = document.createElement("ul");
  asideOptionUl.classList.add("aside-option-ul");
  asideOptionDiv.appendChild(asideOptionUl);

  // Create today's tasks option
  const todaysTask = document.createElement("li");
  todaysTask.classList.add("todays-task");
  asideOptionDiv.appendChild(todaysTask);

  const btntodaysTask = document.createElement("button");
  btntodaysTask.classList.add("btntodays-task");
  btntodaysTask.classList.add("btnTasks");
  btntodaysTask.classList.add("btnActive");
  todaysTask.appendChild(btntodaysTask);

  const todaysTaskIcon = document.createElement("svg");
  todaysTaskIcon.classList.add("todays-task-icon");
  btntodaysTask.appendChild(todaysTaskIcon);

  const todaysTaskText = document.createElement("p");
  todaysTaskText.textContent = "Today's tasks";
  btntodaysTask.appendChild(todaysTaskText);

  // Create week's tasks option
  const weekTasks = document.createElement("li");
  weekTasks.classList.add("week-tasks");
  asideOptionDiv.appendChild(weekTasks);

  const btnweekTasks = document.createElement("button");
  btnweekTasks.classList.add("btnweek-tasks");
  btnweekTasks.classList.add("btnTasks");
  weekTasks.appendChild(btnweekTasks);

  const weekTasksIcon = document.createElement("svg");
  weekTasksIcon.classList.add("week-tasks-icon");
  btnweekTasks.appendChild(weekTasksIcon);

  const weekTasksText = document.createElement("p");
  weekTasksText.textContent = "Week's Tasks";
  btnweekTasks.appendChild(weekTasksText);

  // Create all my tasks option
  const allTasks = document.createElement("li");
  allTasks.classList.add("all-tasks");
  asideOptionDiv.appendChild(allTasks);

  const btnallTasks = document.createElement("button");
  btnallTasks.classList.add("btnall-tasks");
  btnallTasks.classList.add("btnTasks");
  allTasks.appendChild(btnallTasks);

  const allTasksIcon = document.createElement("svg");
  allTasksIcon.classList.add("all-tasks-icon");
  btnallTasks.appendChild(allTasksIcon);

  const allTasksText = document.createElement("p");
  allTasksText.textContent = "All My Tasks";
  btnallTasks.appendChild(allTasksText);

  //--------------------------------------------------------------
  // Projects Main Container
  const asideProjects = document.createElement("div");
  asideProjects.classList.add("aside-projects");
  asideContainer.appendChild(asideProjects);

  // Projects Title Container
  const projectTitleContainer = document.createElement("div");
  projectTitleContainer.classList.add("project-title-container");
  asideProjects.appendChild(projectTitleContainer);

  const projectTitle = document.createElement("h2");
  projectTitle.textContent = "Projects";
  projectTitleContainer.appendChild(projectTitle);

  const btnaddProject = document.createElement("button");
  btnaddProject.classList.add("btn-add-project");
  projectTitleContainer.appendChild(btnaddProject);

  // Create the SVG element
  const addProjectsvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  addProjectsvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  addProjectsvg.setAttribute("viewBox", "0 0 24 24");
  addProjectsvg.setAttribute("width", "20");
  addProjectsvg.setAttribute("height", "20");
  addProjectsvg.setAttribute("fill", "#493628"); // Initial color of the SVG

  // Create the path element inside the SVG
  const addProjectpath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  addProjectpath.setAttribute("d", "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");

  // Append the path to the SVG
  addProjectsvg.appendChild(addProjectpath);

  // Append the SVG to the button
  btnaddProject.appendChild(addProjectsvg);

  // Change color of SVG based on hover or other events
  btnaddProject.addEventListener("mouseenter", () => {
    addProjectpath.setAttribute("fill", "#9d5900"); // Change SVG color on hover
  });

  const projectTitleName = "Project";

  btnaddProject.addEventListener("click", () => {
    const modalInstance = Modal(projectTitleName); // Create modal instance
    modalInstance.showDialog(); // Show the modal dialog
  });

  btnaddProject.addEventListener("mouseleave", () => {
    addProjectpath.setAttribute("fill", "#493628"); // Reset to original color on mouse leave
  });

  // Projects List Container
  const projectListContainer = document.createElement("div");
  projectListContainer.classList.add("project-list-container");
  asideProjects.appendChild(projectListContainer);

  // Projects List ul
  const projectListul = document.createElement("ul");
  projectListul.classList.add("project-list-ul");
  projectListContainer.appendChild(projectListul);

  //--------------------------------------------------------------
  // Tags Main
  const asideTags = document.createElement("div");
  asideTags.classList.add("aside-tags");
  asideContainer.appendChild(asideTags);

  // Tags Title Container
  const tagTitleContainer = document.createElement("div");
  tagTitleContainer.classList.add("tag-title-container");
  asideTags.appendChild(tagTitleContainer);

  const tagTitle = document.createElement("h2");
  tagTitle.textContent = "Tags";
  tagTitleContainer.appendChild(tagTitle);

  const btnAddTag = document.createElement("button");
  btnAddTag.classList.add("btn-add-tag");
  tagTitleContainer.appendChild(btnAddTag);

  // Create the SVG element
  const addTagsvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  addTagsvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  addTagsvg.setAttribute("viewBox", "0 0 24 24");
  addTagsvg.setAttribute("width", "20");
  addTagsvg.setAttribute("height", "20");
  addTagsvg.setAttribute("fill", "#493628"); // Initial color of the SVG

  // Create the path element inside the SVG
  const addTagpath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  addTagpath.setAttribute("d", "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");

  // Append the path to the SVG
  addTagsvg.appendChild(addTagpath);

  // Append the SVG to the button
  btnAddTag.appendChild(addTagsvg);

  // Change color of SVG based on hover or other events
  btnAddTag.addEventListener("mouseenter", () => {
    addTagpath.setAttribute("fill", "#9d5900"); // Change SVG color on hover
  });

  const taskTitleName = "Task";

  btnAddTag.addEventListener("click", () => {
    const modalInstance = Modal(taskTitleName); // Create modal instance
    modalInstance.showDialog(); // Show the modal dialog
  });

  btnAddTag.addEventListener("mouseleave", () => {
    addTagpath.setAttribute("fill", "#493628"); // Reset to original color on mouse leave
  });

  // Tags List Container
  const tagListContainer = document.createElement("div");
  tagListContainer.classList.add("tag-list-container");
  asideTags.appendChild(tagListContainer);

  // Tags List ul
  const tagListUl = document.createElement("ul");
  tagListUl.classList.add("tag-list-ul");
  tagListContainer.appendChild(tagListUl);

  return asideContainer;
}
