import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      alert("All fields are required");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();

      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/Product");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error Fetching Users:", error);
      alert("Something Went Wrong,Plz Try again letter");
    }
  };
  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required=""
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required=""
            />
          </div>
          <button type="submit" className="btn btn-custom">
            Login
          </button>
        </form>
        <p className="mt-3">
          Don't have an account?{" "}
          <Link to={"./Register"} href="#" className="link-custom">
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
