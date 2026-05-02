import React, { useState } from "react";
import './signup.css';
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  // State for form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission

    // Password mismatch check
    if (password !== confirmpassword) {
      alert("Passwords do not match!");
      return; // Exit function early if passwords don't match
    }

    // Send form data to backend
    fetch("http://localhost:3000/signup", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        confirmpassword, // Make sure to send this field for password confirmation
      }),
    })
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }
      alert(data.message); // success case
      navigate("/home");
    })
    .catch((error) => {
      alert("user already exists");
    });
  };

  return (
    <div className="container">
      <h3 style={{ textAlign: "center", fontSize: "40px", marginTop: "120px" }}>Signup Form</h3>
      <form className="card1" onSubmit={handleSubmit}>
        <fieldset style={{ width: "400px", backgroundColor: "cadetblue", marginLeft: "500px" }}>
          <legend>About You</legend>

          <div className="form-group">
            <br />
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}  
            />
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
              required
            />
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  
              required
            />
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm password: </label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}  
              required
            />
          </div>
          <br />

          <button type="submit">Signup</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
