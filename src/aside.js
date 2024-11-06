import "./aside.css";
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
  allTasks.appendChild(btnallTasks);

  const allTasksIcon = document.createElement("svg");
  allTasksIcon.classList.add("all-tasks-icon");
  btnallTasks.appendChild(allTasksIcon);

  const allTasksText = document.createElement("p");
  allTasksText.textContent = "All My Tasks";
  btnallTasks.appendChild(allTasksText);

  return asideContainer;
}
