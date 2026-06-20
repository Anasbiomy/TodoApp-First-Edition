import { AppElement, inputElement, TaskList__listElement } from "./elements";
import { initTaskelisgeners } from "./listeners";

export const toggleDarkTheam = () => {
  saveToDB(
    "isdarkTheam",
    AppElement.classList.contains("App--isDark") ? false : true,
  );
  AppElement.classList.toggle("App--isDark");
};

export const fetchData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
};

export const saveToDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const renderTask = (tasks) => {
  let taskItems = "";

  tasks.forEach((item) => {
    taskItems += `
  <li class="TaskList__taskContent ${
    item.isCompleted ? " TaskList__taskContent--isActive" : ""
  }">
  <div class="TaskList__checkbox" tabindex="0" role="button">
    <img src="./assets/icon-checkmark.svg" alt="icon-checkmark" class="TaskList__checkboxImg">

  </div>
  <div class="TaskList__valueContent">
    <p class="TaskList__value">${item.value}</p>
    <img src="./assets/icon-basket.svg" alt="icon-basket" class="TaskList__deleteIcon">
  </div>
</li>
  `;
  });
  TaskList__listElement.innerHTML = taskItems;
  inputElement.value = "";
};

export const deleteTask = (e, index) => {
  const confirmMessage = confirm(
    "Are you sure that you are want to delete Task",
  );
  if (!confirmMessage) return;

  const tasks = fetchData("task");
  tasks.splice(index, 1);

  saveToDB("task", tasks);
  initTaskList(tasks);
};

export const addTask = () => {
  const inputData = inputElement.value;

  if (!inputData) return;

  const task = {
    value: inputData,
    isCompleted: false,
  };

  const tasks = fetchData("task") || [];

  tasks.push(task);
  saveToDB("task", tasks);
  initTaskList(tasks);
};

export const renderEmptyState = () => {
  TaskList__listElement.innerHTML = `
  <li class="EmptyList">
  <img src="./assets/icon-empty.svg" alt="list is empty" class="EmptyList__img">
  <p>المهام فارغة</p>
</li>

  `;
};
export const initDataonStarter = () => {
  if (fetchData("isdarkTheam")) toggleDarkTheam();
  initTaskList(fetchData("task"));
};

export const initTaskList = (tasks) => {
  if (tasks?.length) {
    renderTask(tasks);
    initTaskelisgeners();
  } else {
    renderEmptyState();
  }
};

export const toggleTask = (e, index) => {
  const tasks = fetchData("task");

  e.currentTarget.parentElement.classList.toggle(
    "TaskList__taskContent--isActive",
  );

  tasks[index].isCompleted = !tasks[index].isCompleted;

  saveToDB("task", tasks);
};
