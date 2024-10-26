import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowrd] = useState(false);
  const [charAllowed, setCharAllowrd] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_+{}[]|:;;+,<>.";
    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random(str) + 1);
      pass = str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);

  return (
    <>
      <div className="w-full max-w-md shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <div className="flex shadow rounded-lg  overflow-hidden mb-4"></div>
      </div>
    </>
  );
}

export default App;
