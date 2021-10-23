import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../redux/actions/todo";

export default function Todo({ description, id }) {
  const [editMode, setEditMode] = useState(false);
  const [editInput, setEditInput] = useState("");
  const dispatch = useDispatch();
  function remove(id) {
    dispatch(removeTodo(id));
  }
  function edit() {
    setEditMode((s) => !s);
  }

  function handleChange(e) {
    setEditInput(e.target.value);
  }

  useEffect(() => {
    if (!editMode && editInput) {
      dispatch(editTodo({ description: editInput, id }));
    }
    setEditInput(description);
    return () => {};
  }, [editMode]);

  return (
    <>
      <li key={id}>
        {editMode ? (
          <input type="text" value={editInput} onChange={handleChange} />
        ) : (
          description
        )}
        <span
          className={editMode ? "edit icon active" : "edit icon"}
          onClick={() => edit()}
        >
          <i className="icon-pencil"></i>
        </span>
        {!editMode && (
          <span className="delete icon" onClick={() => remove(id)}>
            <i className="icon-trash-empty"></i>
          </span>
        )}
      </li>
    </>
  );
}
