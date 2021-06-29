import { doc } from 'prettier';
import { listOfProjects, listOfTasks } from '../script';

const window = document.querySelector('#window');

function createDiv(idOfDiv, classOfDiv) {
  const div = document.createElement('div');
  div.setAttribute('id', idOfDiv);
  div.setAttribute('class', classOfDiv);
  return div;
}
function createSidebar() {
  const sidebar = document.createElement('section');
  sidebar.setAttribute('id', 'sidebar');
  window.appendChild(sidebar);
  return sidebar;
}
function renderProjectsList(array) {
  const projectsWindow = createDiv('projectsWindow', 'sidebarWindow');
  const windowTitle = createDiv('projectWindowTitle', 'sidebarTitles');
  windowTitle.innerText = 'Projects';
  sidebar.appendChild(windowTitle);
  array.forEach((element, index) => {
    const projectName = document.createElement('Button');
    projectName.setAttribute('id', index);
    projectName.setAttribute('class', 'projectItem');
    projectName.innerText = element.title;
    projectsWindow.appendChild(projectName);
  });
  sidebar.appendChild(projectsWindow);
}
function renderListOfTasks(array, taskClassName) {
  const tasksWindow = document.createElement('main');
  tasksWindow.setAttribute('id', 'tasksWindow');

  array.forEach((element, index) => {
    const task = document.createElement('div');
    //Need to change the index here.
    task.setAttribute('id', index);
    task.setAttribute('class', taskClassName);

    const completeBox = document.createElement('input');
    completeBox.setAttribute('type', 'checkbox');
    completeBox.setAttribute('class', 'completeBox');
    task.appendChild(completeBox)

    const taskName = document.createElement('label');
    taskName.setAttribute('for', element.title);
    taskName.innerText = element.title;
    task.appendChild(taskName);

    const taskDate = document.createElement('input');
    taskDate.setAttribute('type', 'date');
    taskDate.setAttribute('id', element.title);
    task.appendChild(taskDate);

    tasksWindow.appendChild(task);
    window.appendChild(tasksWindow);
  });
}

// console.log(document.querySelector('body'));
export { createSidebar, renderProjectsList, renderListOfTasks };
