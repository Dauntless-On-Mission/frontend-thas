import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../store/todos";

export const TodosList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleOnRemove = index => {
    dispatch(removeTodo(index));
  };

  return (
    <div>
      {todos &&
        todos.map((todo, index) => (
          <Todo text={todo} key={index} id={index} onRemove={handleOnRemove} />
        ))}
    </div>
  );
};

const Todo = ({ text, id, onRemove }) => {
  return (
    <div className="todo">
      <span>{text}</span>
      <span onClick={() => onRemove(id)}>❌</span>
    </div>
  );
};
