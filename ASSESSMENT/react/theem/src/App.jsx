import React from "react";
import { AppProvider } from "./Context/AppContext";
import ThemeToggle from "./Component/ThemeToggle";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <ThemeToggle />
        <h1>Hello, React Context!</h1>
      </div>
    </AppProvider>
  );
}

export default App;
