import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "/src/Toolkit/store";
import Header from "./Header";
import LoginPage from "./LoginPage";
import Register from "./Register";
import Product from "./Product";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout />
      </Router>
    </Provider>
  );
}
const MainLayout = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/", "/Register"]; // Correct path for LoginPage and Register page

  return (
    <>
      {/* Conditionally render the header based on the current route */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
