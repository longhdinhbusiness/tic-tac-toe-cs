import React from 'react';
import Square from './Square';

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square value={squares[0]} onClick={() => handleClick()} />
          <Square value={squares[1]} onClick={() => handleClick()} />
          <Square value={squares[2]} onClick={() => handleClick()} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onClick={() => handleClick()} />
          <Square value={squares[4]} onClick={() => handleClick()} />
          <Square value={squares[5]} onClick={() => handleClick()} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onClick={() => handleClick()} />
          <Square value={squares[7]} onClick={() => handleClick()} />
          <Square value={squares[8]} onClick={() => handleClick()} />
        </div>
      </div>
    </div>
  );
}
