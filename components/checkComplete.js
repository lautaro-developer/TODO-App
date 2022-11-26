const checkComplete = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon", "mio");
  i.addEventListener("click", (e) => {
    completeTask(e, id);
  });
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  //ver que es findIndex
  const index = tasks.findIndex(i => i.id == id)

  tasks[index]["complete"] = !tasks[index]["complete"];
  localStorage.setItem('tasks', JSON.stringify(tasks))
};

export default checkComplete;
