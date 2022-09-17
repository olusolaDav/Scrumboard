import React, { Component } from "react";
import Button from "../button/button";
import Data from "../static/data";
import "./scrumbaord.scss";

export class Scrumboard extends Component {
  state = Data;
  render() {
    //const {fullname, project, userType} = this.state.data
    console.log(`${Data.fullname} is log in to chatscrum`);
    return (
      <div className="scrumboard">
        <nav>
          <h1> Welcome to Chatscrum</h1>
          <div className="user">
            <p>User Type: {Data.userType}</p>
            <p>Project Name: {Data.project}</p>
          </div>
        </nav>
        <p id="info">Hello {Data.fullname}, welcome to your scrumboard</p>

        <div className="container">
          <div className="card">
            <div className="box box-1">
              <div className="top">
                <h3>Daily Task</h3>
              </div>

              <div className="content">
                <h2>Chatscrumb</h2>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box box-2">
              <div className="top">
                <h3>Weekly Task</h3>
              </div>

              <div className="content">
                <h2>Chatscrumb</h2>
              </div>
            </div>
          </div>
        </div>

        <Button id={'add'}> ADD TASK</Button>
      </div>
    );
  }
}

export default Scrumboard;
