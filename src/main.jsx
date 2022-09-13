import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Navbar } from "./components/Navbar/Navbar";
import "./main.css";
// import "the-new-css-reset/css/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App appName={runApp} /> */}

    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
