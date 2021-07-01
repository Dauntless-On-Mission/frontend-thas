import React, { useEffect } from "react";
import { useState } from "react";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const QuestionScreen = ({ ques, level, setLevel }) => {
  const [marked, setMarked] = useState(false);
  const [score, setScore] = useState(0);
  const [clickedId, setClickedId] = useState(4);
  const { question, correct_answer, incorrect_answers } = ques;
  let answers = [...incorrect_answers, correct_answer];

  useEffect(() => {
    //eslint-disable-next-line
    answers = shuffle(answers);
  }, [answers]);

  const clickHandler = (index, answer) => {
    console.log(marked);
    if (!marked) {
      setMarked(true);
      console.log(marked);
      setClickedId(index);
      if (answer === correct_answer) setScore(score + 1);
      let result = marked ? "a" : "b";
      setTimeout(() => {
        setMarked(false);
        setLevel(level + 1);
      }, 2000);
      console.log(result);
    }
  };
  return (
    <div className="quesScreen">
      <div className="container">
        <h1 className="title">Question {level}</h1>
        <div className="question">
          <h3>{question}</h3>
        </div>
        <div className="answer">
          {answers.map((answer, index) => {
            return (
              <h3
                className={`option ${
                  marked
                    ? clickedId === index
                      ? answer === correct_answer
                        ? "correct"
                        : `wrong`
                      : answer === correct_answer
                      ? "correct"
                      : ""
                    : ""
                }`}
                key={index}
                onClick={(index) => clickHandler(index, answer)}
              >{`${answer}`}</h3>
            );
          })}
        </div>
        <div className="score">Score : {score}</div>
      </div>
    </div>
  );
};

export default QuestionScreen;
