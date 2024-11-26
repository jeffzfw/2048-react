import React from 'react';

function Tile({ value }) {
  return (
    <div className={`tile ${value ? 'tile-' + value : ''}`}>
      {value || ''}
    </div>
  );
}

export default Tile;
