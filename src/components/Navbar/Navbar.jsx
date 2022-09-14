import React from "react";
import "./navbar.css";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      {/* <Link to="/home">Home</Link> */}
      <NavLink to="/">Counter</NavLink>
      <NavLink
        to="/form"
        // className={({ isActive }) => isActive && classes.isActive}
      >
        Form
      </NavLink>
      <NavLink to="/longform">Long Form</NavLink>
      <NavLink to="/reducer/counter">Counter (Reducer)</NavLink>
      <NavLink to="/reducer/counter-hook">Counter (Hook)</NavLink>
      <NavLink to="/reducer/calculator-hook">Calculator</NavLink>
      <NavLink to="/refHook">refHook</NavLink>
      <NavLink to="/refHook-forward">refHookForward</NavLink>
      <NavLink to="/context-app-provider">Context</NavLink>
      <NavLink to="/mouse-tracker">Mouse Tracker</NavLink>
    </nav>
  );
};
