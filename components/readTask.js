import { createTask } from "./addTask.js";
import { dateElement } from "./dateElement.js";
import { uniqueDate } from "../service/date.js";
import { orderDates } from "../service/date.js";

export const readTasks = () => {
  const list = document.querySelector("[data-list]");
  let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const dates = uniqueDate(taskList);
  orderDates(dates);
  dates.forEach((date) => {
    const dateMoment = moment(date, "DD/MM/YY");
    list.appendChild(dateElement(date));
    taskList.forEach((i) => {
      const dateTask = moment(i.dateFormat, "DD/MM/YY");
      const diff = dateMoment.diff(dateTask);
      if (diff === 0) list.appendChild(createTask(i));
    });
  });
};
