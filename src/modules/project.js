const list = []
// function Project(title) {
//   this.title = title;
//   this.tasks = [];
// }
// Project.prototype.addToProjectsList = function (list) {
//   list.push(this);
// };
// Project.prototype.addTaskToProjectTasks = function (task, project) {
//   project.tasks.push(task);
// };
class Project{
  constructor (title) {
    this.title = title;
    this.tasks = [];
  }
  addToProjectsList(list){
    list.push(this);
  }
  addTaskToProjectTasks(task) {
    this.tasks.push(task);
  }
}
// const newProject = new Project('a');
// newProject.addToProjectsList(list);

// console.log(list)
export { Project };
