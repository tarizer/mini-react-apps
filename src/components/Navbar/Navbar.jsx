import React from "react";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <a href="/home">Home</a>
      <a href="/counter">Counter</a>
      <a href="/form">Form</a>
      <a href="/longform">Long Form</a>
      <a href="/reducer-counter">Counter (Reducer)</a>
      <a href="/reducer-counter-hook">Counter (Hook)</a>
      <a href="/reducer-calculator-hook">Calculator</a>
      <a href="/refHook">refHook</a>
      <a href="/refHook-forward">refHookForward</a>
      <a href="/context-app-provider">Context</a>
      <a href="/mouse-tracker">Mouse Tracker</a>
    </div>
  );
};
