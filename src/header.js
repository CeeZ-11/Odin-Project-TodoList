import "./header.css";
export function Header() {
  const header = document.createElement("header");
  const headerH1 = document.createElement("h1");
  headerH1.textContent = "ToDo List App";
  header.appendChild(headerH1);
  document.body.appendChild(header);
}
