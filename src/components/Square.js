import React from 'react';

function Square({ xIsNext, handleClick }) {
  return (
    <button className={'square'} onClick={handleClick}>
      {null}
    </button>
  );
}

export default Square;
