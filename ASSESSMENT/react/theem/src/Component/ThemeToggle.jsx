// src/components/ThemeToggle.js
import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "light" ? <Moon /> : <Sun />}
      <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
};

export default ThemeToggle;
