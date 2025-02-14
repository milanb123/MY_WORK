import React from "react";
import "./headre.css";
import { useNavigate } from "react-router-dom";
const Header = ({ count }) => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <p className="navbar-brand" href="#">
            QuickShope
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{ gap: 10 }}>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("./Product")}
                >
                  Shop
                </a>
              </li>
              <li className="nav-item position-relative">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("./Cart")}
                >
                  Cart
                  <span className="cart-count">{count}</span>
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="btn btn-custom mx-2"
                  href="#"
                  onClick={() => navigate("/")}
                >
                  Login
                </a>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <a
                  className="btn btn-danger mx-2"
                  href="#"
                  onClick={() => navigate("/")}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
