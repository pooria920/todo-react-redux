export const getTodo = (data) => {
  const todos = getTodosFromStorage();
  return (dispatch) => {
    dispatch({ type: "GET_TODO", data: todos });
  };
};

export const setTodo = (data) => {
  return (dispatch) => {
    const todos = getTodosFromStorage();
    todos.push({ id: getId(todos), description: data });
    localStorage.setItem("todos", JSON.stringify(todos));
    dispatch({ type: "ADD_TODO", data: todos });
  };
};

export const removeTodo = (data) => {
  return (dispatch) => {
    const todos = getTodosFromStorage();
    const newTodos = todos.filter((todo) => todo.id !== data);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    dispatch({ type: "REMOVE_TODO", data: newTodos });
  };
};

export const editTodo = (data) => {
  return (dispatch) => {
    console.log("edit", data);
    const todos = getTodosFromStorage();
    let index = todos.findIndex((t) => t.id === data.id);
    todos[index].description = data.description;
    localStorage.setItem("todos", JSON.stringify(todos));
    dispatch({ type: "EDIT_TODO", data: todos });
  };
};

const getTodosFromStorage = () => {
  let storageTodos = localStorage.getItem("todos");
  let todos = !storageTodos ? [] : JSON.parse(storageTodos);
  return todos;
};

const getId = (todos) => {
  return todos.length ? todos[todos.length - 1].id + 1 : 1;
};
