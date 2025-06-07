console.log("Welcome to Todo App");

let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(task);
  taskInput.value = "";
  displayTasks();
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      ${tasks[i].text}
      <button onclick="deleteTask(${tasks[i].id})">Delete</button>
    `;
    taskList.appendChild(taskItem);
  }
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  displayTasks();
}
