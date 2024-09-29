import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'; // Correctly importing the named export
// import { Practices } from './Practices';
// import Profile from './components/Profile.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Practices/> */}
    {/* <Profile/> */}
  </React.StrictMode>,
);
