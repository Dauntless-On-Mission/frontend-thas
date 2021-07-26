import React, { useEffect, useState } from "react";
import { Post } from "./Post";

export const Posts = ({ setIsLogginedIn }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
          setPosts(data);
        })
        .catch(err => console.log(err));
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setIsLogginedIn(false);
        }}
      >
        Logout
      </button>
      <div>
        {posts.map((post, index) => (
          <Post
            post={post}
            key={index}
            index={index}
            setPosts={setPosts}
            posts={posts}
          />
        ))}
      </div>
    </div>
  );
};
