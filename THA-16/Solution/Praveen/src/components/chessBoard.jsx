import React from "react";
import "./chessBoard.css";

function BlackBox() {
  return (
    <>
      <div className="box black"> </div>
      <div className="box white"></div>
      <div className="box black"> </div>
      <div className="box white"></div>
      <div className="box black"> </div>
      <div className="box white"></div>
      <div className="box black"> </div>
      <div className="box white"></div>
    </>
  );
}
function WhiteBox() {
  return (
    <>
      <div className="box white"></div>
      <div className="box black"> </div>
      <div className="box white"></div>
      <div className="box black"> </div>
      <div className="box white"></div>
      <div className="box black"> </div>
      <div className="box white"></div>
      <div className="box black"> </div>
    </>
  );
}

function Board() {
  return (
    <>
      <div className="BoardBase">
        <BlackBox />
        <WhiteBox />
        <BlackBox />
        <WhiteBox />
        <BlackBox />
        <WhiteBox />
        <BlackBox />
        <WhiteBox />
      </div>
    </>
  );
}

export default Board;
