import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Mobile from "./Mobile";
import Context from "./Context";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Context>
        <Header />
        <Mobile />
      </Context>
    </>
  );
}

export default App;
