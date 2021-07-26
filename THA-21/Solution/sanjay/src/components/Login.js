import React, { useState } from "react";
import "../styles/login.css";

export const Login = ({ setIsLogginedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleOnFormDataChange = e => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    const updateState = state => {
      const object = { ...state, [name]: value };
      return object;
    };

    setFormData(updateState);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const { email, password } = formData;

    // data empty validation
    if (!email) {
      setError("Email cannot be empty!");
      return;
    }
    if (!password) {
      setError("Password cannot be empty!");
      return;
    }

    // Password min 6

    if (password.length < 6) {
      setError("Password must be of length 6 or more!");
      return;
    }

    setError("");
    console.log(formData);
    setIsLogginedIn(true);
  };

  return (
    <div>
      <h3>Login</h3>
      <form>
        {/* email */}
        {/* password */}

        {/* Controlled and uncontrolled */}

        {/* <h2>{formData.email}</h2>
        <h2>{formData.password}</h2> */}

        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          name="email"
          onChange={handleOnFormDataChange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          name="password"
          onChange={handleOnFormDataChange}
        />
        <button onClick={handleOnSubmit}>Login</button>

        <p>{error}</p>
      </form>
    </div>
  );
};
