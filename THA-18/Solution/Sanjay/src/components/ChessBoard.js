import React, { useEffect, useState } from "react";
import "../styles/ChessBoard.css";

export const ChessBoard = () => {
  const [cells, setCells] = useState([]);
  const colors = ["white", "black"];
  useEffect(() => {
    const arr = [];
    const createCells = () => {
      for (let i = 0; i < 8; i++) {
        const row = [];
        for (let j = 0; j < 8; j = j + 1) {
          row.push(colors[(i + j) % 2]);
        }
        arr.push(row);
      }
      setCells(arr);
    };
    createCells();
  }, []);
  return (
    <section className="chess-board">
      {cells.map(row => (
        <div className="row">
          {row.map(c => (
            <span className="cell" style={{ backgroundColor: c }}></span>
          ))}
        </div>
      ))}
    </section>
  );
};
