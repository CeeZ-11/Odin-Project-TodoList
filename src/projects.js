import "./projects.css";

export let projects = ["Personal"];

export function Projects() {
  let selectedProject = projects[0];

  // Add project
  function addProject(name) {
    projects.push(name);

    // Update the aside project list after adding a new project
    displayProjectsAside();
    saveToLocalStorage();
  }

  function saveToLocalStorage() {
    // Convert the projects to a JSON string and store it in localStorage
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function loadProjectsFromLocalStorage() {
    // Check if there are projects in localStorage and load them
    const savedProjects = localStorage.getItem("projects");

    if (savedProjects) {
      projects = JSON.parse(savedProjects);
      console.log("Projects loaded: " + JSON.stringify(projects));
      displayProjectsAside();
    }
  }

  // Function to display projects in the sidebar (aside)
  function displayProjectsAside() {
    const projectListUl = document.querySelector(".displayProject");

    if (projectListUl) {
      projectListUl.innerHTML = ""; // Clear the existing list

      // Loop through the projects and add them to the list
      projects.forEach((project) => {
        const li = document.createElement("li");
        projectListUl.appendChild(li);

        const button = document.createElement("button");

        // Specific style for each class for project list
        if (projectListUl.classList.contains("project-list-ul")) {
          button.classList.add("btnTasks", "btnProject", "btntags-list");
        }

        button.textContent = project;
        li.appendChild(button);
      });
    }
  }

  // Assign the selected project to the value of SVG element
  function selectModal() {
    const svgProject = document.querySelector(".svg-project");
    if (svgProject) {
      svgProject.setAttribute("data-project", selectedProject);
    }
  }

  // Function to display projects in the modal
  function displayProjectsModal() {
    // Check for an existing modal and remove it if found
    const existingModal = document.querySelector(".modal-project");
    if (existingModal) {
      existingModal.remove();
    }

    // Create a new modal and append it to the body of the document
    const modal = document.createElement("div");
    modal.classList.add("modal-project");
    document.body.appendChild(modal);

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = "Projects";
    modal.appendChild(projectTitle);

    const projectListContainer = document.createElement("div");
    projectListContainer.classList.add("project-list-container-modal");
    modal.appendChild(projectListContainer);

    const projectListul = document.createElement("ul");
    projectListul.classList.add("project-list-ul-modal", "displayProject");
    projectListContainer.appendChild(projectListul);

    // Loop through the projects and add them to the modal list
    projects.forEach((project) => {
      const li = document.createElement("li");
      projectListul.appendChild(li);

      const button = document.createElement("button");
      button.classList.add("btnProjectModal");
      button.textContent = project;

      // Select the first project by default
      if (project === selectedProject) {
        button.classList.add("btnSelectedProject");
      }

      li.appendChild(button);
    });

    // Check selected project in the modal
    modal.addEventListener("click", (event) => {
      if (event.target && event.target.classList.contains("btnProjectModal")) {
        const buttons = modal.querySelectorAll(".btnProjectModal");
        buttons.forEach((btn) => btn.classList.remove("btnSelectedProject"));

        selectedProject = event.target.textContent;
        event.target.classList.add("btnSelectedProject");

        selectModal();
        modal.remove();
      }
    });

    // Close modal when clicking outside of it
    const closeModal = (event) => {
      if (
        !modal.contains(event.target) &&
        !event.target.classList.contains("svg-project")
      ) {
        selectModal();
        modal.remove();
        document.removeEventListener("click", closeModal); // Cleanup event listener
      }
    };

    document.addEventListener("click", closeModal);
  }

  return {
    addProject,
    displayProjectsAside, // Only affects the sidebar
    displayProjectsModal, // Only affects the modal
    loadProjectsFromLocalStorage, // Only loads projects when the page is loaded
    selectedProject,
  };
}
