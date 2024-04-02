import { useState } from 'react';
import Content from './components/Content.jsx';
import Player from './components/Player.jsx';
import axios from "axios";

function App() {
  const [contentVisible, setContentVisible] = useState(false);
  const [enteredName, setEnteredName] = useState('');
  const [riddles, setRiddles] = useState(null);

  const API_KEY = "sOswIEP+RWb0tca1o69BZQ==7SyQPSa6KvfWriLV";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/riddles",
        {
          params: {
            limit: 5,
          },
          headers: {
            "X-Api-Key": API_KEY,
          },
        }
      );
      setRiddles(response.data);
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  const getEnteredName = (name) =>{
    setEnteredName(name);
  } 
  return (
    <>
      <Player setContentVisible={setContentVisible} getEnteredName={getEnteredName} />
      <Content contentVisible={contentVisible} fetchData={fetchData} riddles={riddles} />
    </>
  );
}

export default App;
