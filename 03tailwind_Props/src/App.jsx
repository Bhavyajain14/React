import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-rose-700 bg-green-400 p-4 rounded-xl mb-10">
        Tailwind test
      </h1>
      <Card channelname="ChaiAurcode" arr = { } />
    </>
  );
}

export default App;
