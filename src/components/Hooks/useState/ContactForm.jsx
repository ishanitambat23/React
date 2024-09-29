import { useState } from "react";
import "./Registration.css";

export const ContactForm = () => {
// const[username,setUserName] = useState("");
// const[email,setEmail] = useState("");
// const[message,setMessage] = useState("");

const[contacts, setContacts] = useState({
    username:"",
    email:"",
    message:"",
});

const handleFormSubmit = (e) => {
e.preventDefault();
const contactData = {
    username,
    email,
    message
};
console.log(contactData);

};

const handleInputChange = (e) => {
    const{name, value} = e.target;
    setContacts((prev) => ({
        ...prev, 
        [name] : value
    }))
}

  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input 
          type="text" 
          name="username" 
          required autoComplete="off"
          value={contacts.username}
        //   onChange={(e) => setUserName(e.target.value)}
        onChange={handleInputChange}
          />

          <label htmlFor="Email">Email</label>
          <input 
          type="email" 
          name="email" 
          required autoComplete="off" 
          value={contacts.email}
        //   onChange={(e) => setEmail(e.target.value)}
        onChange={handleInputChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            autoComplete="off"
            rows="6"
            value={contacts.message}
            // onChange={(e) => setMessage(e.target.value)}
            onChange={handleInputChange}
          ></textarea>

          <button type="submit" className="login-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};
