import React, { Component } from "react";
//import Button from '../button/button'
import Data from "../static/data";
import { IoClose } from 'react-icons/io5';

import "./scrumbaord.scss";

export class Scrumboard extends Component {
  constructor(){
    super();
    this.state = {
      data: Data,
      isOpen: false,
      task: null
    }
  }

  openModal = () => {
    this.setState({
      isOpen:true
    })
     console.log("modal open");
  }

  closeModal = () => {
    this.setState({
      isOpen: false
    })
   
  }

  onChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      isOpen: false
    })
  }
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
        <p id="info">Hello, {Data.fullname} welcome to your scrumboard</p>

        <div className="container">
          <div className="card">
            <div className="box box-1">
              <div className="top">
                <h3>Daily Task</h3>
              </div>

              <div className="content">
                <h2>Chatscrumb</h2>
                <p className="addTask">{this.state.task}</p>
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

        <div id="modal" className={this.state.isOpen ? "show" : "hidden"}>
          <div className="header">
            <h3>Add new task</h3>
            <h3 id="close" onClick={() => this.closeModal()}>
              {" "}
              <IoClose />{" "}
            </h3>
          </div>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name=""
              id="inputField"
              onChange={this.onChange}
            />
            <button className="confirm">CONFIRM</button>
          </form>
        </div>

        <button
          id="add"
          className={this.state.isOpen ? "btn-hide" : null}
          onClick={() => this.openModal()}
        >
          {" "}
          ADD TASK
        </button>
      </div>
    );
  }
}

export default Scrumboard;
