import React from "react";

const vertical = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizantal =  ["1", "2", "3", "4", "5", "6", "7", "8"];
function ChessBoard() {
  const handleadd = (e) => {
    console.log(e.target.innerText);
  };
  let board = [];
  for (let j = vertical.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizantal.length; i++) {
      const number = j + i + 2;

      if (number % 2 === 0) {
        board.push(
          <div onClick={(e) => handleadd(e)} className="tile white-tile">
            {horizantal[i]}
            {vertical[j]}
          </div>
        );
      } else {
        board.push(
          <div className="tile black-tile">
            {horizantal[i]}{vertical[j]}
          </div>
        );
      }
    }
  }

  return (
    <>
      <div className="chess_bigdiv">{board}</div>
    </>
  );
}

export default ChessBoard;
