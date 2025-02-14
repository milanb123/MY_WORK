import React, { useContext } from "react";
import { MycartContext } from "./Context";

const Mobile = () => {
  const { cart, addToCart, decrement } = useContext(MycartContext);

  return (
    <>
      <h1
        style={{
          display: "flex",
          position: "absolute",
          top: "61px",
        }}
      >
        MOBILE PHONE
      </h1>
      <div
        className="maincontainer"
        style={{
          display: "flex",
          position: "absolute",
          gap: "90px",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "80vh",
          marginLeft: "80px",
          marginRight: "80px",
          marginTop: "100px",
        }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            width: "25rem",
            height: "32rem",
            justifyContent: "center",
            aligniterm: "center",
            backgroundColor: "lightblue",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            border: "1px solid black",
          }}
        >
          <img
            src="https://m.media-amazon.com/images/I/810b1GFtl9L._SX679_.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p
              className="card-text"
              style={{
                fontSize: "larger",
                fontWeight: "bold",
                color: "black",
                fontFamily: "Arial, sans-serif",
                textTransform: "uppercase",
                letterSpacing: "2px",
                lineHeight: "1.2",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: "lightblue",
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              SAMSUNG GALAXY S23 ULTRA
            </p>
            <button
              onClick={() => {
                addToCart(cart + 1);
              }}
            >
              [+]
            </button>
            ADD TO CART
            <button
              onClick={() => {
                if (cart > 0) {
                  decrement(cart - 1);
                }
              }}
            >
              [-]
            </button>
          </div>
        </div>
        {/* second card */}
        <div
          className="card"
          style={{
            width: "25rem",
            height: "32rem",
            backgroundColor: "lightblue",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            border: "1px solid black",
          }}
        >
          <img
            src=" https://m.media-amazon.com/images/I/31W9+sE8McL._SY300_SX300_.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p
              className="card-text"
              style={{
                fontSize: "larger",
                fontWeight: "bold",
                color: "black",
                fontFamily: "Arial, sans-serif",
                textTransform: "uppercase",
                letterSpacing: "2px",
                lineHeight: "1.2",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: "lightblue",
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              SAMSUNG GALAXY S24 ULTRA
            </p>
            <button
              onClick={() => {
                addToCart(cart + 1);
              }}
            >
              [+]
            </button>
            ADD TO CART
            <button
              onClick={() => {
                if (cart > 0) {
                  decrement(cart - 1);
                }
              }}
            >
              [-]
            </button>
          </div>
        </div>

        <div
          className="card"
          style={{
            width: "25rem",
            height: "32rem",
            backgroundColor: "lightblue",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            border: "1px solid black",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNZKVIYEAspmPvZcsEfnshQmvfg1iucNuYQ&s"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p
              className="card-text"
              style={{
                fontSize: "larger",
                fontWeight: "bold",
                color: "black",
                fontFamily: "Arial, sans-serif",
                textTransform: "uppercase",
                letterSpacing: "2px",
                lineHeight: "1.2",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: "lightblue",
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              SAMSUNG GALAXY S25 ULTRA
            </p>
            <button
              onClick={() => {
                addToCart(cart + 1);
              }}
            >
              [+]
            </button>
            ADD TO CART
            <button
              onClick={() => {
                if (cart > 0) {
                  decrement(cart - 1);
                }
              }}
            >
              [-]
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
