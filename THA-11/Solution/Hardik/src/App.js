import "./App.css";
import { useState, useEffect } from "react";
import { List } from "./questions";
import Homescreen from "./Components/HomeScreen";
import QuestionScreen from "./Components/questionScreen";

function App() {
  let rand;
  const [start, setStart] = useState(false);
  const [question, setQuestion] = useState({});
  const [askedQuestion, setAskedQuestion] = useState([]);
  const [level, setLevel] = useState(0);

  const resetHandler = () => {
    setStart(false);
    setQuestion({});
    setAskedQuestion([]);
    setLevel(0);
  };

  const questionGenerator = () => {
    if (level > 15) resetHandler();
    else {
      rand = Math.floor(Math.random() * List.length);
      while (askedQuestion.length > 0 && askedQuestion.indexOf(rand) > -1)
        rand = Math.floor(Math.random() * (List.length + 1));
      askedQuestion.push(rand);
      setAskedQuestion(askedQuestion);
      let newQuestion = { ...List[askedQuestion[level]] };
      setQuestion({ ...newQuestion });
    }
  };

  useEffect(() => {
    questionGenerator();
    //eslint-disable-next-line
  }, [level]);

  return (
    <div className="App">
      {!start && <Homescreen setStart={setStart} setLevel={setLevel} />}
      {start && (
        <QuestionScreen ques={question} level={level} setLevel={setLevel} />
      )}
    </div>
  );
}

export default App;
