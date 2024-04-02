import React, { useEffect, useState } from "react";
import Card from "./Card";
import PopUp from "./PopUp";

const Content = ({ contentVisible, fetchData, riddles }) => {
  if (!contentVisible) return;
  
  const [correctCount, setCorrectCount] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  const [ansCount, setAnsCount] = useState(1);

  useEffect(() => {
      fetchData();
  }, []);

  const retryHandler = () =>{
    fetchData();
    setAnsCount(1)
    setCorrectCount(0)
    setShowPopUp(false);
  }

  return (
    <div>
      {showPopUp ? 
      <PopUp correctCount={correctCount} retryHandler={retryHandler} /> :
      riddles &&
        ( riddles.map((riddle, index) => {
          return (
            <Card
              key={index}
              riddle={riddle}
              setCorrectCount={setCorrectCount}
              setShowPopUp={setShowPopUp}
              ansCount={ansCount}
              setAnsCount={setAnsCount}
            />
          );
        })
      ) 
      }
    </div>
  );
};

export default Content;
