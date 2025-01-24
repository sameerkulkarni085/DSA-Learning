import React from "react";
// Update the import statement for react-dom/client
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Ensure you have a root element in your HTML file with id 'root'
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
