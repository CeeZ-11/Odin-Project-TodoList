import "./style.css";
import { Header } from "./header.js";
import { Container } from "./container.js";
import { Task } from "./task.js";
import { Projects } from "./projects.js";
import { Tags } from "./tags.js";

const { loadProjectsFromLocalStorage } = Projects();
const { loadTagsFromLocalStorage } = Tags();
document.addEventListener("DOMContentLoaded", () => {
  Header();
  Container();
  Task.loadFromLocalStorage();
  loadProjectsFromLocalStorage();
  loadTagsFromLocalStorage();
});
