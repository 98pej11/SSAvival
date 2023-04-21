// PaperPullingGame.jsx

import React, { useState } from "react";

function PaperPullingGame() {
  const [squares, setSquares] = useState(Array(9).fill(false));

  const handleClick = (index) => {
    const newSquares = [...squares];
    newSquares[index] = true;
    setSquares(newSquares);
  };

  return (
    <div className="wrapper">
      {squares.map((square, index) => (
        <div
          key={index}
          className={`square${square ? " clicked" : ""}`}
          onClick={() => handleClick(index)}
        >
          {square && "🧻"}
        </div>
      ))}
    </div>
  );
}

export default PaperPullingGame;
