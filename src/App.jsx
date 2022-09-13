import React, { useState } from "react";
import Counter from "./components/useState/Counter";
import Form from "./components/useState/Form";
import LongForm from "./components/useState/LongForm";

import ReducerCounter from "./components/useReducer/Counter";
import CounterCustomHook from "./components/useReducer/CounterCustomHook";

import Calculator from "./components/useReducer/Calculator";

import RefHook from "./components/useRef/RefHook";
import RefHookForward from "./components/useRef/RefHookForward";
import ContextMouseProvider from "./components/useContext/ContextMouseProvider";
import ContextAppProvider from "./components/useContext/ContextAppProvider";

function App() {
  const [appName, setAppName] = useState("ReducerCalculator");

  // setAppName()

  switch (appName) {
    case "Counter":
      console.log("Inside Counter");
      return <Counter />;
    case "Form":
      console.log("Inside Form");
      return <Form title="⚛️ Form" />;
    case "LongForm":
      console.log("Inside LongForm");
      return <LongForm title="⚛️ LongForm" />;
    case "ReducerCounter":
      console.log("Inside ReducerCounter");
      return <ReducerCounter title="⚛️ Counter using reducer hook" />;
    case "ReducerCounterCustom":
      console.log("Inside ReducerCounter (Custom hook)");
      return (
        <CounterCustomHook title="⚛️ Counter using reducer hook with a custom hook" />
      );
    case "ReducerCalculator":
      console.log("Inside ReducerCalculator (Custom hook)");
      return (
        <Calculator title="⚛️ Calculator using reducer hook with custom hooks" />
      );
    case "refHook":
      console.log("Inside refHook (useHook)");
      return (
        <RefHook title="⚛️ Using ref (useRef) to focus on the first input element" />
      );
    case "refHookForward":
      console.log("Inside refHook (useHook & forwaedRef)");
      return (
        <RefHookForward title="⚛️ Using ref (useRef & forwaedRef) to focus on the first input element" />
      );
    case "ContextAppProvider":
      console.log("Inside ContextAppProvider");
      return <ContextAppProvider title="⚛️ Testing context hook provider" />;
    case "MouseTracker":
      console.log("Inside MouseTracker");
      return (
        <ContextMouseProvider title="⚛️ Testing context hook provider with context" />
      );

    default:
      console.log("No app selected");
      return "No app selected";
  }
}

export default App;
