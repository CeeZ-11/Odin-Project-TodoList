import { Task } from "./task";

export let tags = [];
export function Tags() {
  function addTag(name) {
    tags.push(name);
    displayTagsAside();
    saveToLocalStorage();
  }

  function saveToLocalStorage() {
    // Convert the tags to a JSON string and store it in localStorage
    localStorage.setItem("tags", JSON.stringify(tags));
  }

  function loadTagsFromLocalStorage() {
    // Check if there are tags in localStorage and load them
    const savedTags = localStorage.getItem("tags");

    if (savedTags) {
      tags = JSON.parse(savedTags);
      console.log("Tags loaded: " + JSON.stringify(tags));
      displayTagsAside();
    }
  }

  function displayTagsAside() {
    const tagListUl = document.querySelector(".tag-list-ul");
    if (tagListUl) {
      tagListUl.innerHTML = "";

      tags.forEach((tag) => {
        const li = document.createElement("li");
        tagListUl.appendChild(li);

        const button = document.createElement("button");
        button.classList.add("btnTasks");
        button.classList.add("btnTag");
        button.classList.add("btnTasks");
        button.textContent = `#${tag}`;

        li.appendChild(button);
      });
    }
  }

  return {
    addTag,
    tags,
    loadTagsFromLocalStorage,
  };
}
