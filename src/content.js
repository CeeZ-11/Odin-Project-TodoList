import "./content.css";
export function Content() {
  let num = 0;
  let contentTable = 0;
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");

  // Create header section for the title
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("contentHeader");
  headerDiv.textContent = "Today's Tasks"; // Set your desired title here
  contentDiv.appendChild(headerDiv);

  // Create table container
  const tableContainer = document.createElement("div");
  tableContainer.classList.add("table-content");

  // Append tableContainer to contentDiv
  contentDiv.appendChild(tableContainer);

  function createTable(num, contentTable, tableTitle) {
    tableContainer.innerHTML = "";

    for (let i = 0; i <= num; i++) {
      const table = document.createElement("table");
      table.classList.add("table");

      if (contentTable == 1) {
        tableContainer.classList.remove("table-content-not-weekly");
        table.textContent = `${days[i]}`; // Placeholder text; you can add table rows here
        headerDiv.textContent = "Week's Tasks";
      } else if (contentTable == 0 && i == 0) {
        tableContainer.classList.add("table-content-not-weekly");
        table.textContent = "Today";
        headerDiv.textContent = "Today's Tasks";
      } else if (contentTable == 2 && i == 0) {
        tableContainer.classList.add("table-content-not-weekly");
        table.textContent = `All My Tasks`;
        headerDiv.textContent = "All My Tasks";
      } else if (contentTable == 3 && i == 0) {
        tableContainer.classList.add("table-content-not-weekly");
        table.textContent = "Tasks";
        headerDiv.textContent = `Project ${tableTitle}`;
      } else if (contentTable == 4 && i == 0) {
        tableContainer.classList.add("table-content-not-weekly");
        table.textContent = "Tasks";
        headerDiv.textContent = `Tag ${tableTitle}`;
      }

      tableContainer.appendChild(table);
    }
  }

  return { num, contentTable, contentDiv, createTable };
}
