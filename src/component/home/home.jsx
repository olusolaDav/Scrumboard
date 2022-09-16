 import React from 'react';
 import './home.css'
 import { Link } from "react-router-dom";

 const Home = () => {
    return (
      <div className="home">
        <h1> Welcome to ChatScrum</h1>
        <nav>
          <Link to="/sign-up" className="links link-home">
            Sign Up
          </Link>
          <Link to="/sign-in" className="links link-home">
            Sign In
          </Link>
        </nav>
      </div>
    );
 }
  
 export default Home;