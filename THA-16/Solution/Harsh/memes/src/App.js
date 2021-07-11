import { useState, useEffect } from "react";
import Card from "./card";

function App() {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const fetchMeme = async () => {
      const response = await fetch("https:/meme-api.herokuapp.com/gimme");
      const result = await response.json();
      setData({ ...result });
      setLoaded(true);
    };
    fetchMeme();
  }, []);

  return <div className="App">{loaded && <Card data={data} />}</div>;
}

export default App;
