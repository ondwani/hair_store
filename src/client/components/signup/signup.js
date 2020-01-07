import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSignUpForm } from "../../customHooks";

const Signup = () => {
  const { handleSubmit, handleInputChange, inputs } = useSignUpForm(
    handleSignup
  );
  
  // const [signups, setSignups] = useState(null);
  // const handleInputChange = e => {
  //     const {name, value} = e.target;
  //     setSignups({...signups, [name]: value})
  // };
  const handleSignup = () => {
    return axios
      .post("/api/register", inputs)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  console.log(inputs);
  return (
    <div>
      <div className="split right">
        {" "}
        p<div className="split left1"></div>
        <div className="centered">
          <h2>Create a new account</h2>
          <input
            className="loginput"
            name="name"
            type="text"
            placeholder="Full Name"
            onChange={handleInputChange}
          />
          <input
            className="loginput"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <input
            className="loginput"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
          <input
            className="loginput"
            name="password2"
            type="password"
            placeholder="Confirm Password"
            onChange={handleInputChange}
          />
          <br />
          <div className="Terms">
            <input type="checkbox" />
            {"    "}I agree all statements in Terms of Service
          </div>
          <Link to="/login">
            <button onClick={handleSignup} className="btn" type="submit">
              Register
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Signup;
