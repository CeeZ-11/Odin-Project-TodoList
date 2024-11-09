export function Tags() {
  const tags = [];

  function addTag(name) {
    tags.push(name);
    console.log("tags");
    displayTagsAside();
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
  };
}
