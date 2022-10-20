import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Rendering the App component 
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// No longer supported by React 18
//ReactDOM.render(<App />, document.getElementById("root"));