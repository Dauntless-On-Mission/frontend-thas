import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";

const List = ({ id, title, removeItem, editItem }) => {
  const [checked, setChecked] = useState(false);

  const checkboxHandler = (e) => {
    if (e.target.checked === true) setChecked(true);
    else setChecked(false);
  };

  return (
    <article className={`task-item ${checked ? "task-checked" : ""}`}>
      <div className="task-title">
        <input
          type="checkbox"
          name="completed"
          id="iscompleted"
          onClick={checkboxHandler}
        />
        <p className="title">{title}</p>
      </div>
      <div className="btn-container">
        <button
          type="button"
          className="edit-btn"
          onClick={() => editItem(id, title)}
        >
          <FaEdit />
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default List;
