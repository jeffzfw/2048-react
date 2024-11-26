import React from 'react';
import Tile from './Tile';

function Board({ grid, onTouchStart, onTouchEnd }) {
  return (
    <div 
      className="board"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {grid.map((row, i) =>
        row.map((value, j) => (
          <Tile 
            key={`${i}-${j}`} 
            value={value} 
          />
        ))
      )}
    </div>
  );
}

export default Board;
