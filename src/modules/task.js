function Task(title, description, dueDate, priority, project, isComplete) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.project = project;
  this.isComplete = isComplete;
}
Task.prototype.addToTasksList = function (task, list) {
  list.push(task);
};
export { Task };

