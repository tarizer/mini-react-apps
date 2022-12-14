import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Pages/Home/Home";
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
import { NotFound } from "./components/Pages/NotFound/NotFound";
import { Reducer } from "./components/Pages/Reducer/Reducer";
import { ReducerLayout } from "./components/ReducerLayout/ReducerLayout";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Counter />} />
      <Route path="/form" element={<Form title="⚛️ Form" />} />
      <Route path="/longform" element={<LongForm title="⚛️ LongForm" />} />

      <Route path="/reducer" element={<ReducerLayout />}>
        <Route index element={<Reducer />} />
        <Route
          path="counter"
          element={<ReducerCounter title="⚛️ Counter using reducer hook" />}
        />
        <Route
          path="counter-hook"
          element={
            <CounterCustomHook title="⚛️ Counter using reducer hook with a custom hook" />
          }
        />
        <Route
          path="calculator-hook"
          element={
            <Calculator title="⚛️ Calculator using reducer hook with custom hooks" />
          }
        />
      </Route>

      <Route
        path="/refHook"
        element={
          <RefHook title="⚛️ Using ref (useRef) to focus on the first input element" />
        }
      />
      <Route
        path="/refHook-forward"
        element={
          <RefHookForward title="⚛️ Using ref (useRef & forwaedRef) to focus on the first input element" />
        }
      />

      <Route
        path="/context-app-provider"
        element={
          <ContextAppProvider title="⚛️ Testing context hook provider" />
        }
      />
      <Route
        path="/mouse-tracker"
        element={
          <ContextMouseProvider title="⚛️ Testing context hook provider with context" />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
