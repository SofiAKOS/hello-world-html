const listContainer = document.getElementById('list-container');
const addListForm = document.getElementById('add-list-form');

function loadLists() {
 
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const list = JSON.parse(localStorage.getItem(key));
    const listElement = createListElement(key, list);
    listContainer.appendChild(listElement);
  }
}

function createListElement(key, list) {
  
  const listElement = document.createElement('li');
  const listTitle = document.createElement('h2');
  listTitle.innerText = key;
  listElement.appendChild(listTitle);
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    localStorage.removeItem(key);
    listElement.remove();
  });
  listElement.appendChild(deleteButton);
  const taskList = document.createElement('ul');
  for (let i = 0; i < list.length; i++) {
    const taskElement = document.createElement('li');
    taskElement.innerText = list[i].name;
    if (list[i].completed) {
      taskElement.classList.add('completed');
    }
    taskElement.addEventListener('click', () => {
      list[i].completed = !list[i].completed;
      localStorage.setItem(key, JSON.stringify(list));
      taskElement.classList.toggle('completed');
    });
    taskList.appendChild(taskElement);
  }
  listElement.appendChild(taskList);
  const addTaskForm = document.createElement('form');
  const taskNameInput = document.createElement('input');
  taskNameInput.type = 'text';
  taskNameInput.placeholder = 'Task name';
  addTaskForm.appendChild(taskNameInput);
  const addTaskButton = document.createElement('button');
  addTaskButton.innerText = 'Add Task';
  addTaskButton.addEventListener('click', (event) => {
    event.preventDefault();
    const taskName = taskNameInput.value;
    if (taskName) {
      const newTask = {
        name: taskName,
        completed: false
      };
      list.push(newTask);
      localStorage.setItem(key, JSON.stringify(list));
      const newTaskElement = document.createElement('li');


      newTaskElement.innerText = newTask.name;
      newTaskElement.addEventListener('click', () => {
        newTask.completed = !newTask.completed;
        localStorage.setItem(key, JSON.stringify(list));
        newTaskElement.classList.toggle('completed');
      });
      taskList.appendChild(newTaskElement);
      taskNameInput.value = '';
    }
  });
  addTaskForm.appendChild(addTaskButton);
  listElement.appendChild(addTaskForm);
  return listElement;
}

addListForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const listNameInput = document.getElementById('list-name');
  const listName = listNameInput.value;
  if (listName) {
    const list = [];
    localStorage.setItem(listName, JSON.stringify(list));
    const listElement = createListElement(listName, list);
    listContainer.appendChild(listElement);
    listNameInput.value = '';
  }
});

loadLists();
