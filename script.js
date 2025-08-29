function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => {
      removeTask(task);
    };
    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (!task) return;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  loadTasks();
}

function removeTask(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

document.getElementById("addTaskBtn")?.addEventListener("click", addTask);
loadTasks();