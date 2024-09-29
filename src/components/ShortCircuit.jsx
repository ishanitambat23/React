import { useState } from "react";
import "./Hooks.css";

const ShortCircuitExample = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(true);
    const[user,setUser] = useState("");



    return (
      <section className="container short-container">
        <h1>Welcome to the Short Circuit Evaluation!</h1>

        {/* Conditionalrendering using short circuit evaluation */}
        {isLoggedIn && <p>You are logged in!</p>}

        {/* Another example of short circuit evaluation */}
        {user ? `Hello ${user}` : "Please log in"}


        <div className="grid-three-cols">
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
          <button onClick={() => setUser("Ishani Tambat")}>Set User</button>
          <button onClick={() => setUser("")}>Clear User</button>
        </div>
      </section>
    );
  };
  
  export default ShortCircuitExample; // Ensure this line is present
  