import React from "react";
import { Link, Outlet } from "react-router-dom";

export const ReducerLayout = () => {
  return (
    <>
      <Outlet />
      <ul>
        <li>
          <Link to="/reducer">Reducers</Link>
        </li>
        <li>
          <Link to="/reducer/counter">Counter (Reducer)</Link>
        </li>
        <li>
          <Link to="/reducer/counter-hook">Counter (Hook)</Link>
        </li>
        <li>
          <Link to="/reducer/calculator-hook">Calculator</Link>
        </li>
      </ul>
    </>
  );
};
