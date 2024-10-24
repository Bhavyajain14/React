// Import necessary modules from React and ReactDOM
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { jsx as _jsx } from "react/jsx-runtime";

// Define your app components
function MyApp() {
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  );
}

/*
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
 */
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google"
);

const root = createRoot(document.getElementById("root"));
root.render(reactElement);
