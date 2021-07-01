import React from "react";

const HomeScreen = ({ setStart, setLevel }) => {
  return (
    <div className="homescreen">
      <div className="home-container">
        <h1 className="heading">Javascript Quiz</h1>
        <button
          className="btn"
          onClick={() => {
            setTimeout(() => {
              setStart(true);
              setLevel((prevlevel) => prevlevel + 1);
            }, 200);
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
