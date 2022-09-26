import React, { Component } from 'react';
import './App.css';
import SignIn from './component/sign-in/sign-in';
import SignUp from './component/sign-up/sign-up';
import Home from "./component/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Scrumboard} from './component/scrumboard/scrumboard';
import Auth from './component/auth/auth';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Auth />}>
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
            </Route>

            <Route path="/scrumboard" element={<Scrumboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
     
     
  }
}

export default App;
