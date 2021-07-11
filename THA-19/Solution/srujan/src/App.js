import './App.css';
import {useState} from 'react';

function App() {

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  return (
    <div className="App">
      <h1>Individual Counter:</h1>
      <button onClick = {() => setValue(value + 1)} className ='btn'> { value } </button>
      <button onClick = {() => setValue1(value1 + 1)} className ='btn'> { value1 } </button>
      <button onClick = {() => setValue2(value2 + 1)} className ='btn'> { value2 } </button>
      <button onClick = {() => setValue3(value3 + 1)} className ='btn'> { value3 } </button>
    </div>
  );
}

export default App;
