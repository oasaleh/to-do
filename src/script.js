import _ from 'lodash';
import './style.css';
import { Project } from './modules/project';
import { Task } from './modules/task';
import { createSidebar, renderProjectsList, renderListOfTasks } from './modules/dom';

export const listOfProjects = [];
export const listOfTasks = [];
// const addToProjectsList = function (project, listOfProjects) {
//   listOfProjects.push(project);
//   };
function createProject(projectName) {
  const projectObject = new Project(projectName);
  projectObject.addToProjectsList(listOfProjects);
}
function selectProject(projectName) {
  const selectedProject = listOfProjects.find((projectObj) => projectObj.title == projectName);
  // selectedProject.renderTasks(selectedProject.tasks);
  return selectedProject;
}
function createTask(
  title,
  description = 'description',
  dueDate = new Date(),
  priority = 'Low',
  project = 'None',
  isComplete = 'false'
) {
  const task = new Task(title, description, dueDate, priority, project, isComplete);
  task.addToTasksList(task, listOfTasks);
  const thisProject = listOfProjects.find((projectObj) => projectObj.title == task.project);
  thisProject.addTaskToProjectTasks(task, thisProject);
  return task;
}
createProject('None');
createProject('Workout');
createProject('Biology');
createProject('JavaScript');
createTask('Legs Day', "Go to Gold's GYM", '06/12/2021', 1, 'Workout', true);
createTask('Study Lecture 101', 'Exam coming soon', new Date(), 'High', 'Biology');
createTask('OOP', 'The Odin Project', new Date(), 'High', 'JavaScript');
selectProject('Biology');
// const task = new Task('Legs Day', "Go to Gold's GYM", '06/12/2021', 1, 'Workout');
// addProject(task.project);

console.log(listOfProjects);
console.log(listOfTasks);
createSidebar();
renderProjectsList(listOfProjects);
renderListOfTasks(listOfTasks, 'task');
