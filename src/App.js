/* eslint-disable eqeqeq */
import React, { useState } from "react";

import "./App.css";

import { Board } from "./components/board";

function App() {
  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    checkWinner(updatedBoard);

    setBoard(updatedBoard);

    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for(let i = 0; i < WIN_CONDITION.length; i++) {
      const[x,y,z] = WIN_CONDITION[i];

      if(board[x] && board[x] == board[y] && board[y] == board[z]) {
        console.log(board[x])
        return board[x];
      }
    }
  }

  return (
    <div>
      <Board board={board} onClick={handleBoxClick} />
    </div>
  );
}

export default App;
