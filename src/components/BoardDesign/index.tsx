import React, { useState } from 'react';

// import './BoardDesign.css'

const BoardDesign: React.FC = () => {
  const [selectedPiece, setSelectedPiece] = useState<null | [number, number]>(null);
  const [moveTarget, setMoveTarget] = useState<null | [number, number]>(null);

  const handlePieceClick = (row: number, col: number) => {
    if (selectedPiece) {
      // Move the selected piece to the clicked position
      setMoveTarget([row, col]);
    } else {
      // Select the clicked piece
      setSelectedPiece([row, col]);
    }
  };

  const handleAnimationEnd = () => {
    if (moveTarget) {
      // Update the board state with the moved piece
      // Reset the selectedPiece and moveTarget states
      setTimeout(() => {
        setSelectedPiece(null);
        setMoveTarget(null);
      }, 500); // Delay the reset to match the animation duration (0.5s)
    }
  };
  const renderBoard = () => {
    const board = [
      ['-', 'C', '-', 'C', '-', 'C', '-', 'C'],
      ['C', '-', 'C', '-', 'C', '-', 'C', '-'],
      ['-', 'C', '-', 'C', '-', 'C', '-', 'C'],
      ['C', '-', 'C', '-', 'C', '-', 'C', '-'],
      ['-', 'C', '-', 'C', '-', 'C', '-', 'C'],
      ['C', '-', 'C', '-', 'C', '-', 'C', '-'],
      ['-', 'C', '-', 'C', '-', 'C', '-', 'C'],
      ['C', '-', 'C', '-', 'C', '-', 'C', '-'],
    ];
    const men = [
      ['-', 'W', '-', 'W', '-', 'W', '-', 'W'],
      ['W', '-', 'W', '-', 'W', '-', 'W', '-'],
      ['-', 'W', '-', 'W', '-', 'W', '-', 'W'],
      ['-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-'],
      ['B', '-', 'B', '-', 'B', '-', 'B', '-'],
      ['-', 'B', '-', 'B', '-', 'B', '-', 'B'],
      ['B', '-', 'B', '-', 'B', '-', 'B', '-'],
    ];

    return (
      <div className="w-96 h-96 bg-gray-300 flex flex-wrap rounded-md overflow-hidden">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex w-full">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`w-12 h-12 flex justify-center items-center cursor-pointer ${
                  cell === '-' ? 'bg-gray-300' : 'bg-gray-500'
                }`}
                onClick={() => handlePieceClick(rowIndex, colIndex)}
              >
                {cell !== '-' && (
                  <div
                    className={`w-10 h-10 flex justify-center items-center text-white text-2xl duration-75 rounded-full ${
                      men[rowIndex][colIndex] !== '-'
                        ? 'bg-gray-600 cursor-pointer'
                        : ''
                    } ${
                      selectedPiece &&
                      selectedPiece[0] === rowIndex &&
                      selectedPiece[1] === colIndex
                        ? 'border-2 border-yellow-300'
                        : ''
                    }`}
                    onAnimationEnd={handleAnimationEnd}
                    style={
                      moveTarget &&
                      moveTarget[0] === rowIndex &&
                      moveTarget[1] === colIndex
                        ? { animation: 'movePiece 0.5s' }
                        : {}
                    }
                  >
                    {men[rowIndex][colIndex] === '-' ? '' : men[rowIndex][colIndex]}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2>Checkers Game</h2>
      {renderBoard()}
    </div>
  );
};

export default BoardDesign;