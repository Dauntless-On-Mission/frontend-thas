import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, loadTodos, removeAllTodos } from "../store/todos";

export const AddTodo = () => {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();
  const length = useSelector(state => state.todos.length);

  const handleTodoInput = e => {
    setTodoInput(e.target.value);
  };

  const handleOnKeyDown = e => {
    if (e.key === "Enter" && todoInput) {
      handleOnSubmit();
    }
  };

  const handleOnSubmit = () => {
    dispatch(addTodo(todoInput));
    setTodoInput("");
  };

  return (
    <main className="add-todos-container">
      <h2>Todos</h2>
      <input
        type="text"
        placeholder="Add a todo"
        style={{ padding: "11px" }}
        value={todoInput}
        onChange={e => handleTodoInput(e)}
        onKeyDown={e => handleOnKeyDown(e)}
      />
      <div style={{ marginTop: "21px" }}>
        <button
          style={{ padding: "11px" }}
          onClick={() => dispatch(loadTodos())}
        >
          Load Fake Todos
        </button>
        {length > 0 && (
          <button
            style={{ padding: "11px" }}
            onClick={() => dispatch(removeAllTodos())}
          >
            Remove All Todos
          </button>
        )}
      </div>
    </main>
  );
};
