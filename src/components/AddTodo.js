import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setTodo } from "../redux/actions/todo";
export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const addBtn = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTodo(newTodo));
    setNewTodo("");
  };

  const handleChangeInput = (e) => {
    e.target.value
      ? addBtn.current.classList.add("active")
      : addBtn.current.classList.remove("active");
    setNewTodo(e.target.value);
  };

  return (
    <form className="inputField" onSubmit={handleSubmit}>
      <input
        value={newTodo}
        type="text"
        target="todo"
        placeholder="Add your new todo"
        onChange={handleChangeInput}
      ></input>
      <button ref={addBtn} type="submit">
        <i className="icon-plus"></i>
      </button>
    </form>
  );
}
