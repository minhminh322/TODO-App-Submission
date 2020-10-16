export const dueCalculator = (dueDate) => {
  const ONE_DAY = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const todayDate = Date.now();
  const diff = Math.floor(Math.abs(dueDate - todayDate) / ONE_DAY);
  if (diff === 0) {
    return "Today";
  } else if (diff === 1) {
    return "Tomorrow";
  } else {
    return `${diff} days `;
  }
};

// export const saveLocalTodos = (todo) => {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
// };
