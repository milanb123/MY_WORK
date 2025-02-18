import React, { createContext, useState } from "react";
export const AppContext = createContext();

// Context Provider
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Context object with properties and values
  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
