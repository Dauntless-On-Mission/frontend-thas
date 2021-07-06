import { useEffect, useState, useRef } from "react";
import Card from "./card";
import "./App.scss";
import { CardArray } from "./cardArray";

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
export default function App() {
  const [cards, setCards] = useState(
    shuffleCards.bind(null, CardArray.concat(CardArray))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === CardArray.length) {
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
      alert("You Won");
      handleRestart();
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      // clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
    //eslint-disable-next-line
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
    //eslint-disable-next-line
  }, [clearedCards]);

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setMoves(0);
    setShouldDisableAllCards(false);
    setCards(shuffleCards(CardArray.concat(CardArray)));
  };

  return (
    <div className="App">
      <header>
        <h1>Play the Flip card game</h1>
        <div>
          <h3>
            Select two cards with same content consequtively to make them vanish
          </h3>
        </div>
      </header>
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      <footer>
        <div className="score">
          <div className="moves">
            <span className="bold">Moves : {moves}</span>
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span className="bold">Best Score : {bestScore}</span>
            </div>
          )}
        </div>
        <div className="restart">
          <button onClick={handleRestart} color="primary" variant="contained">
            Restart
          </button>
        </div>
      </footer>
    </div>
  );
}
