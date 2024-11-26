import React, { useState, useEffect } from 'react';
import './App.css';
import { useGame2048 } from './hooks/useGame2048';
import Board from './components/Board';
import Header from './components/Header';

function App() {
  const { 
    grid, 
    score, 
    gameOver,
    handleKeyDown,
    handleTouchStart,
    handleTouchEnd 
  } = useGame2048();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="app">
      <Header score={score} />
      <Board 
        grid={grid}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />
      {gameOver && (
        <div className="game-over">
          Game Over!
        </div>
      )}
    </div>
  );
}

export default App;
