const todos = (state = [{ id: 0, description: "" }], action) => {
  switch (action.type) {
    case "GET_TODO":
      return action.data;
    case "ADD_TODO":
      return action.data;
    case "EDIT_TODO":
      return action.data;
    case "REMOVE_TODO":
      return action.data;
    default:
      return state;
  }
};

export default todos;
