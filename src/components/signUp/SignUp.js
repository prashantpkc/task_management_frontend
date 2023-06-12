import React, { useState } from 'react';
import axios from 'axios';
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  
  const handleSignup = (e) => {
    e.preventDefault();
    
    const formData = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      role: role
    };
    
    axios
      .post('http://localhost:8000/register', formData)
      .then(() => {
        // Redirect or show success message
      })
      .catch((error) => {
        console.error(error.message);
        // Show error message to the user
      });
  };
  
  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Name"
          />
        </div>
        
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Email"
          />
        </div>
        
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="Password"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
            placeholder="Phone"
          />
        </div>
        
        <div className="form-group">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-input"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
