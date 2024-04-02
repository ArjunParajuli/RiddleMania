import React, { useRef, useState } from "react";

const Card = ({ riddle, setCorrectCount, setShowPopUp, ansCount, setAnsCount }) => {
  // console.log(riddle)
  const answer = useRef();

  const checkAnswer = () =>{
    setAnsCount((prev)=>(prev+1))
    const ans = answer.current.value.toLowerCase();
    if(riddle.answer.includes(ans)){
      setCorrectCount((prev)=>(prev+1))
    }

    if(ansCount === 5){
      setShowPopUp(true);
    }
    console.log("Answered")
    console.log(ansCount)
  }

  return (
    <div className="card">
      <h3>{riddle.title}</h3>
      <h4>{riddle.question}</h4>
      <div>
      <input type="text" ref={answer} />
      <button onClick={checkAnswer}>Save</button>
      </div>
    </div>
  );
};

export default Card;
