export function Projects() {
  const projects = [];

  function addProject(name) {
    projects.push(name);
    displayProjectsAside();
  }

  function displayProjectsAside() {
    const projectListUl = document.querySelector(".project-list-ul");
    if (projectListUl) {
      projectListUl.innerHTML = "";

      projects.forEach((project) => {
        const li = document.createElement("li");
        projectListUl.appendChild(li);

        const button = document.createElement("button");
        button.classList.add("btnTasks");
        button.classList.add("btnProject");
        button.classList.add("btntags-list");
        button.textContent = project;

        li.appendChild(button);
      });
    }
  }

  return {
    addProject,
    projects,
  };
}
