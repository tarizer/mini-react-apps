import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      {/* <Link to="/home">Home</Link> */}
      <Link to="/">Counter</Link>
      <Link to="/form">Form</Link>
      <Link to="/longform">Long Form</Link>
      <Link to="/reducer-counter">Counter (Reducer)</Link>
      <Link to="/reducer-counter-hook">Counter (Hook)</Link>
      <Link to="/reducer-calculator-hook">Calculator</Link>
      <Link to="/refHook">refHook</Link>
      <Link to="/refHook-forward">refHookForward</Link>
      <Link to="/context-app-provider">Context</Link>
      <Link to="/mouse-tracker">Mouse Tracker</Link>
    </nav>
  );
};
