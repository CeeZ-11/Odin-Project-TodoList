import { tags } from "./tags.js";
import { Task } from "./task.js";
import { projects } from "./projects.js";
import "./infoModal.css";

let returnSelectedProject = "";
let returnSelectedTag = "";
export function InfoModal() {
  function displayInfoModal() {
    const existingModalContainer = document.querySelector("modal-info");

    if (existingModalContainer) {
      existingModalContainer.remove();
    }

    const modalBackContainer = document.createElement("div");
    modalBackContainer.classList.add("modal-back-container");
    document.body.appendChild(modalBackContainer);

    const modalContainer = document.createElement("div");
    modalContainer.id = "modal-info";
    document.body.appendChild(modalContainer);
  }

  function displayWeeklyInfoModal() {
    const existingWeeklyModalContainer =
      document.querySelector("modal-weekly-info");

    if (existingWeeklyModalContainer) {
      existingWeeklyModalContainer.remove();
    }

    const modalBackContainer = document.createElement("div");
    modalBackContainer.classList.add("modal-weekly-back-container");
    document.body.appendChild(modalBackContainer);

    const modalWeeklyContainer = document.createElement("div");
    modalWeeklyContainer.classList.add("modal-weekly-info");
    document.body.appendChild(modalWeeklyContainer);
  }

  function infoModalProject(selectedProject) {
    displayInfoModal();
    const modalContainer = document.querySelector("#modal-info");

    const modalProjectContainer = document.createElement("div");

    const modalProjectHeader = document.createElement("div");
    modalProjectContainer.appendChild(modalProjectHeader);

    const h2 = document.createElement("h2");
    h2.textContent = "Projects";
    modalProjectHeader.appendChild(h2);

    const modalProjectBody = document.createElement("div");
    modalProjectBody.classList.add("modal-project-body");
    modalProjectContainer.appendChild(modalProjectBody);

    const projectListul = document.createElement("ul");
    projectListul.classList.add("modal-project-ul");
    modalProjectBody.appendChild(projectListul);

    // Display list of project  or tag from projects.js and tasks.js

    generateInfoList(projects, projectListul);

    // if background modal is selected close modal
    const modalBackContainer = document.querySelector(".modal-back-container");
    modalBackContainer.addEventListener("click", () => {
      modalBackContainer.remove();
      modalContainer.remove();
    });

    projectListul.querySelectorAll(".btnProjectModal").forEach((btn) => {
      if (btn.textContent === selectedProject) {
        btn.classList.add("btnInfoSelected");
      }
    });

    projectListul.addEventListener("click", (event) => {
      projectListul.querySelectorAll(".btnProjectModal").forEach((btn) => {
        btn.classList.remove("btnInfoSelected");
      });

      returnSelectedProject = event.target.textContent;
      event.target.classList.add("btnInfoSelected");

      const getId = document.querySelector("h4").textContent;

      Task.getInfoModalProject(getId, returnSelectedProject);

      modalBackContainer.remove();
      modalContainer.remove();
    });

    modalContainer.appendChild(modalProjectContainer);
  }

  function infoModalTag(selectedTag) {
    displayInfoModal();
    const modalContainer = document.querySelector("#modal-info");

    const modalTagContainer = document.createElement("div");

    const modalTagHeader = document.createElement("div");
    modalTagContainer.appendChild(modalTagHeader);

    const h2 = document.createElement("h2");
    h2.textContent = "Tags";
    modalTagHeader.appendChild(h2);

    const modalTagBody = document.createElement("div");
    modalTagBody.classList.add("modal-tag-body");
    modalTagContainer.appendChild(modalTagBody);

    const projectListul = document.createElement("ul");
    projectListul.classList.add("modal-tag-ul");
    modalTagBody.appendChild(projectListul);

    // Display list of project  or tag from projects.js and tasks.js

    generateInfoList(tags, projectListul);

    // if background modal is selected close modal
    const modalBackContainer = document.querySelector(".modal-back-container");
    modalBackContainer.addEventListener("click", () => {
      modalBackContainer.remove();
      modalContainer.remove();
    });

    //FIX here
    projectListul.querySelectorAll(".btnTagModal").forEach((btn) => {
      if (btn.textContent === selectedTag) {
        btn.classList.add("btnInfoSelected");
      }
    });

    projectListul.addEventListener("click", (event) => {
      projectListul.querySelectorAll(".btnTagModal").forEach((btn) => {
        btn.classList.remove("btnInfoSelected");
      });

      returnSelectedTag = event.target.textContent;
      event.target.classList.add("btnInfoSelected");

      const getId = document.querySelector("h4").textContent;

      Task.getInfoModalTag(getId, returnSelectedTag);

      modalBackContainer.remove();
      modalContainer.remove();
    });

    modalContainer.appendChild(modalTagContainer);
  }

  function generateInfoList(subjects, projectListul) {
    subjects.forEach((subject) => {
      const li = document.createElement("li");
      projectListul.appendChild(li);

      const button = document.createElement("button");
      button.classList.add("btnProjectModal");
      button.textContent = subject;

      li.appendChild(button);
    });
  }

  return { infoModalProject, infoModalTag, displayWeeklyInfoModal };
}
