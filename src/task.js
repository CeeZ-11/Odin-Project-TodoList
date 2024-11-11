export class Task {
  constructor(title, description, duedate, project, note, tag, completed) {
    this.title = title || ""; // Default to an empty string if no title
    this.description = description || ""; // Default to an empty string if no description
    this.duedate = duedate || new Date().toISOString(); // Default to the current date if no due date
    this.project = project || ""; // Default to an empty string if no project
    this.note = note || ""; // Default to an empty string if no note
    this.tag = tag || ""; // Default to an empty string if no tag
    this.completed = completed || false; // Default to false if no completion status
    this.id = Date.now(); // Use Date.now() to generate a more unique ID (or use a UUID library)
  }

  logTask() {
    // Log the task details to the console
    console.log(`Task ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`Due Date: ${this.duedate}`);
    console.log(`Project: ${this.project}`);
    console.log(`Note: ${this.note}`);
    console.log(`Tag: ${this.tag}`);
    console.log(`Completed: ${this.completed}`);
  }
}
