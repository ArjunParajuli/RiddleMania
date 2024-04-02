import { useState, useRef, useEffect } from "react";

export default function Player({setContentVisible, getEnteredName}) {
  const [enteredName, setEnteredName] = useState("");
  const playerName = useRef();  

  const clickHandler = () => {
    setEnteredName(playerName.current.value);    
  }

  useEffect(()=>{
    // so that it avoids rendering on first time and only renders when enteredName changes 
     if(enteredName != ""){
      setContentVisible(true);
      getEnteredName(enteredName);
     }
  }, [enteredName])
  
  return (
    <section id="player">
      <h2>Welcome { enteredName!=="" ? enteredName : "Challenger" }</h2>
      <div>
        <label>Enter your name to step into the realm of riddles</label>
        <p>
          <input
            type="text"
            ref={playerName}  // playerName ref is now connected to this input field
          />
          <button onClick={clickHandler}>Initiate</button>
        </p>
      </div>
    </section>
  );
}
