// utils/localStorageHelper.js

export const getTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  if (!todos) {
    localStorage.setItem("todos", JSON.stringify([]));
    return [];
  } else {
    return JSON.parse(todos);
  }
};

export const setTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
