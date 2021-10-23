import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function todo() {
  return (
    <div className="wrapper">
      <header>Todo App</header>
      <AddTodo />
      <TodoList />
      {/* <div className="footer">
        <span>
          You have <span className="pendingTasks"></span> pending tasks
        </span>
        <button>Clear All</button>
      </div> */}
    </div>
  );
}
