import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import "./styles/styles.css";
import calculatorLogic from "./utils/calculatorLogic";
import keyboardHandler from "./utils/keyboardHandler";
import {useMemory} from "./hooks/useMemory";
import { useHistory } from "./hooks/useHistory";

function App() {

  const [value, setValue] = useState("0");
  const [theme, setTheme] = useState("light");

  const valueRef = useRef(value);
  useEffect(() => {
    valueRef.current = value;
  },[value]);

  const { history, setHistory } = useHistory();

  const { memory, setMemory, memoryRef } = useMemory();

  const handleClick = (input) => {
    calculatorLogic(input, value, setValue, setHistory, setMemory, memoryRef.current);
  };  

  useEffect(() => {
    const handleKeyPress = keyboardHandler(valueRef, setValue, handleClick, setHistory);
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  },[]);
  
  return (
    <main className={`calculator ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <Display value={value} />
      <section className="history">
        <h2>History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <Keypad onClick={handleClick} />
    </main>
  )
};

export default App;