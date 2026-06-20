import {
  buttonElement,
  DarkThemeToggleElement,
  deleteIconElement,
  getCheckboxElements,
  TasklinkElement,
  TaskList__listElement,
} from "./elements";
import { addTask, deleteTask, toggleDarkTheam, toggleTask } from "./utils";

export const initTaskelisgeners = () => {
  deleteIconElement().forEach((element, index) => {
    element.addEventListener("click", (e) => {
      deleteTask(e, index);
    });
  });

  getCheckboxElements().forEach((box, index) => {
    box.addEventListener("click", (e) => toggleTask(e, index));
    box.addEventListener("keydown", (e) => e.key && toggleTask(e, index));
  });
};

export const initlisteners = () => {
  buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask();
  });

  DarkThemeToggleElement.addEventListener("click", () => {
    toggleDarkTheam();
  });

  TasklinkElement.addEventListener("click", () => {
    TaskList__listElement.classList.toggle("TaskList__list--hideCompleted");
    TasklinkElement.classList.toggle("TaskList__link--isActive");
  });
};
