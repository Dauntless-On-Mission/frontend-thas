import React, { useState } from "react";
import "../styles/post.css";

export const Post = ({ post, index, setPosts, posts }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const [editData, setEditData] = useState({
    title: post.title,
    body: post.body
  });

  const handleOnDataChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setEditData(current => ({ ...current, [name]: value }));
  };

  const handleOnSave = () => {
    const arr = posts.map((post, ind) => {
      if (ind === index) {
        return {
          ...post,
          title: editData.title,
          body: editData.body
        };
      } else {
        return post;
      }
    });
    setPosts(arr);
    setIsEditMode(false);
  };

  return (
    <div className="post">
      <div>
        {isEditMode ? (
          <input
            name="title"
            value={editData.title}
            onChange={handleOnDataChange}
          />
        ) : (
          <strong>{post.title}</strong>
        )}
      </div>

      {isEditMode ? (
        <textarea
          name="body"
          value={editData.body}
          onChange={handleOnDataChange}
        />
      ) : (
        <div>{post.body}</div>
      )}
      {isEditMode ? (
        <button onClick={handleOnSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditMode(true)}>Edit</button>
      )}
    </div>
  );
};
