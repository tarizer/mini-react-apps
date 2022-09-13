import React from "react";

export const { Provider, Consumer } = React.createContext({
  data: "Default context value",
});

export const firstContext = React.createContext();
export const secondContext = React.createContext();

export const mouseContext = React.createContext();
