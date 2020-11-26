import './styles/App.css';
import React, { useState } from 'react';
import Gameboard from './components/Gameboard';

function App() {
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
    newHiScore();
  };

  const newHiScore = () => {
    if (hiScore <= score) {
      setHiScore(hiScore +1);
    }
  }

  const gameOver = () => {
    setScore(0);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <div className='score-card'>
          <h6>Score: {score} </h6>
          <h6>Hi Score: {hiScore} </h6>
        </div>
      </header>
      <main>
        <div className='intro'>
          Choose each card once. Do not select the same card twice, otherwise you lose.
        </div>
        < Gameboard incrementScore={incrementScore} gameOver={gameOver} />
      </main>
    </div>
  );
}

export default App;

// Don't use bootstrap. Roll your own