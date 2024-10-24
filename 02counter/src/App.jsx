import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const AddValue = () => {
    if (counter != 21) setCounter(counter++);
  };
  const removeValue = () => {
    if (counter != -1) setCounter(counter--);
  };
  return (
    <>
      <h1>Chai aur react {counter}</h1>
      <h2>Counter = {counter}</h2>
      <button onClick={AddValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>
      <p>footer {counter}</p>
    </>
  );
}

export default App;
