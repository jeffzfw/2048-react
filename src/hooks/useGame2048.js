import { useState, useCallback, useEffect } from 'react';

export function useGame2048(gridSize = 4) {
  const [grid, setGrid] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const initGrid = useCallback(() => {
    const newGrid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
    addRandomTile(newGrid);
    addRandomTile(newGrid);
    setGrid(newGrid);
  }, [gridSize]);

  useEffect(() => {
    initGrid();
  }, [initGrid]);

  const addRandomTile = (currentGrid) => {
    const emptyCells = [];
    currentGrid.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell === 0) emptyCells.push([i, j]);
      });
    });

    if (emptyCells.length > 0) {
      const [i, j] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      currentGrid[i][j] = Math.random() < 0.9 ? 2 : 4;
    }
  };

  const moveGrid = (direction) => {
    const newGrid = JSON.parse(JSON.stringify(grid));
    let moved = false;
    let newScore = score;

    // Helper function to process one row/column
    const processList = (list) => {
      const filtered = list.filter(x => x !== 0);
      const merged = [];
      let i = 0;
      
      while (i < filtered.length) {
        if (i + 1 < filtered.length && filtered[i] === filtered[i + 1]) {
          merged.push(filtered[i] * 2);
          newScore += filtered[i] * 2;
          i += 2;
          moved = true;
        } else {
          merged.push(filtered[i]);
          i++;
        }
      }
      
      while (merged.length < gridSize) merged.push(0);
      if (JSON.stringify(list) !== JSON.stringify(merged)) moved = true;
      return merged;
    };

    // Process grid based on direction
    if (direction === 'left' || direction === 'right') {
      for (let i = 0; i < gridSize; i++) {
        const row = direction === 'left' ? 
          [...newGrid[i]] : 
          [...newGrid[i]].reverse();
        
        const processed = processList(row);
        newGrid[i] = direction === 'left' ? 
          processed : 
          processed.reverse();
      }
    } else {
      for (let j = 0; j < gridSize; j++) {
        const column = [];
        for (let i = 0; i < gridSize; i++) {
          column.push(newGrid[i][j]);
        }
        
        const processed = direction === 'up' ? 
          processList(column) : 
          processList([...column].reverse()).reverse();
        
        for (let i = 0; i < gridSize; i++) {
          newGrid[i][j] = processed[i];
        }
      }
    }

    if (moved) {
      addRandomTile(newGrid);
      setGrid(newGrid);
      setScore(newScore);
      checkGameOver(newGrid);
    }
  };

  const checkGameOver = (currentGrid) => {
    // Check for empty cells
    if (currentGrid.some(row => row.includes(0))) return;

    // Check for possible merges
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const current = currentGrid[i][j];
        const neighbors = [
          [i - 1, j], [i + 1, j],
          [i, j - 1], [i, j + 1]
        ];

        for (const [ni, nj] of neighbors) {
          if (ni >= 0 && ni < gridSize && nj >= 0 && nj < gridSize) {
            if (currentGrid[ni][nj] === current) return;
          }
        }
      }
    }

    setGameOver(true);
  };

  const handleKeyDown = useCallback((e) => {
    if (gameOver) return;

    switch (e.key) {
      case 'ArrowUp': moveGrid('up'); break;
      case 'ArrowDown': moveGrid('down'); break;
      case 'ArrowLeft': moveGrid('left'); break;
      case 'ArrowRight': moveGrid('right'); break;
      default: break;
    }
  }, [gameOver, grid]);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStart([touch.clientX, touch.clientY]);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart[0];
    const deltaY = touch.clientY - touchStart[1];

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > 50) {
        moveGrid(deltaX > 0 ? 'right' : 'left');
      }
    } else {
      if (Math.abs(deltaY) > 50) {
        moveGrid(deltaY > 0 ? 'down' : 'up');
      }
    }

    setTouchStart(null);
  };

  return {
    grid,
    score,
    gameOver,
    handleKeyDown,
    handleTouchStart,
    handleTouchEnd
  };
}
