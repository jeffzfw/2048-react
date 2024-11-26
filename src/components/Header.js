import React from 'react';

function Header({ score }) {
  return (
    <div className="header">
      <h1>2048</h1>
      <div className="score-container">
        <div className="score-label">Score</div>
        <div className="score">{score}</div>
      </div>
    </div>
  );
}

export default Header;
