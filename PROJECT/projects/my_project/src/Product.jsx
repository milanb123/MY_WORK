import React, { useEffect, useState } from "react";
import "./Product.css";
import Header from "./Header";

const Product = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productList();
  }, []);

  const productList = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const tocart = (product) => {
    const userId = localStorage.getItem("id");
    if (!userId) {
      console.warn("User not logged in");
      return;
    }

    // let existingItem = cart.find(
    //   (item) => item.productid === product.id && item.userid === userId
    // );
  };
  return (
    <>
      <Header count={count} />
      <div className="container mt-4">
        <h2 className="text-center">Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card product-card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <h6 className="price">₹{product.price}</h6>
                  <button onClick={increment}>+</button>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => tocart(product)}
                  >
                    BUY NOW 🛒
                  </button>
                  <button onClick={decrement}>-</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
