export class Task {
  constructor(title, description, duedate, project, note, tag, completed) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.project = project;
    this.note = note;
    this.tag = tag;
    this.completed = completed;
    this.id = Math.random();
  }
}
