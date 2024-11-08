import "./modal.css";
import { Projects } from "./projects.js";
import { Tags } from "./tags.js";

const tag = Tags();
const project = Projects();

export function Modal(title) {
  // Create container div for the modal
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("popup-modal");

  // Create dialog element
  const dialog = document.createElement("dialog");

  // Create dialog container (fixed variable name)
  const dialogContainer = document.createElement("div");
  dialogContainer.id = "dialog-container";

  const closeDiv = document.createElement("div");
  closeDiv.classList.add("close-div");
  dialogContainer.appendChild(closeDiv);

  // Create the "X" button for closing the modal
  const closeX = document.createElement("button");
  closeX.id = "close-button";
  closeX.textContent = "X"; // "X" for closing
  closeX.onclick = () => {
    closeDialog();
  };

  closeDiv.appendChild(closeX);

  // Create form element
  const form = document.createElement("form");
  form.action = "";
  form.method = "get";
  form.id = "dialog-form";

  // Append form to dialogContainer
  dialogContainer.appendChild(form);

  // Create input for title
  const inputTitleDiv = document.createElement("div");
  inputTitleDiv.id = "input-title";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  titleInput.placeholder = `Add a ${title}`;
  titleInput.pattern = "^[a-zA-Z\\s]+$";
  titleInput.size = "15";
  titleInput.maxLength = "245";
  titleInput.required = true;

  inputTitleDiv.appendChild(titleInput);
  form.appendChild(inputTitleDiv);

  const buttonDiv = document.createElement("div");
  buttonDiv.id = "button-div";
  form.appendChild(buttonDiv);

  // Create button
  const addButton = document.createElement("button");
  addButton.id = "add-button";
  addButton.textContent = "Add";
  addButton.type = "submit";
  addButton.autofocus = true;

  buttonDiv.appendChild(addButton);

  form.onsubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    if (title === "Project") project.addProject(titleInput.value);
    if (title === "Tag") tag.addTag(titleInput.value);
    closeDialog();
  };

  // Append dialogContainer to dialog
  dialog.appendChild(dialogContainer);

  // Append dialog to modalContainer
  modalContainer.appendChild(dialog);

  // Append the whole modalContainer to the body (or any other container)
  document.body.appendChild(modalContainer);

  // Close dialog when clicking outside the form (on modalContainer)
  modalContainer.addEventListener("click", (e) => {
    // If the click is outside the dialogContainer, close the modal
    if (!dialogContainer.contains(e.target)) {
      closeDialog();
      modalContainer.remove();
    }
  });

  function showDialog() {
    dialog.showModal();
  }

  function closeDialog() {
    dialog.close();
    modalContainer.remove();
  }

  // Return an object with methods to control the modal
  return {
    showDialog,
    closeDialog,
  };
}
