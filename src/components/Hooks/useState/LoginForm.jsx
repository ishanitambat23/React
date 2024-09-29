import { useState } from "react";
import "./Registration.css";

export const LoginForm = () => {
// Declare a state variable for username
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = () => {
    e.preventDefault();

    const loginData = {
        username,
        password,
    };
    console.log(loginData);
    
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input 
          type="text" 
          name="username" 
          required autoComplete="off" 
          value={username} // Set the value of the input to the state variable
          onChange={(e) => setUsername(e.target.value)} // Event handler for input changes, Update the state with the current value of the input field
          />

          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          name="password" 
          required autoComplete="off" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
