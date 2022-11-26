export const dateElement = (date) => {
  const elemetDate = document.createElement("li");
  elemetDate.classList.add("date");
  elemetDate.innerHTML = date;
  return elemetDate;
};
