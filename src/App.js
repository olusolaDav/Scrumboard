import React, { Component } from 'react';
import './App.css';
import SignIn from './component/sign-in/sign-in';
import SignUp from './component/sign-up/sign-up';


class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <SignUp />
        <SignIn />
      </div>
    );
  }
}

export default App;
