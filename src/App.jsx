import { useState } from "react";

// Components
import Card from "./components/Card";
import Circle from "./components/Circle";
import UserInput from "./components/UserInput";

// CSS
import styles from "./App.module.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [output, setOutput] = useState("");
  const [thinking, setThinking] = useState(false);
  

  function handleSubmit(e) {
    e.preventDefault();
    // Display thinking message
    setThinking(true);
    setOutput("...");

    // Execute timer
    setTimeout(() => {
      setThinking(false);
      setOutput(userInput);
    }, 1000);
  }

  
  return (
    <div className={styles.container}>
      {/* <form onSubmit={handleSubmit}>
        <input max={999} type="number" onChange={(e) => setUserInput(e.target.value)}></input>
        <button type="submit">go</button>
      </form> */}
      {/* <Card thinking={thinking} output={output} />
      <Card /> */}

      <UserInput handleSubmit={handleSubmit} />

      <Card>
      <Circle output={output} />
       {thinking && "thinking..."}
      </Card>

      <Card className={styles.card}>
      <Circle output={output} />
       {thinking && "thinking..."}
      </Card>
    </div>
  );
}

export default App;
