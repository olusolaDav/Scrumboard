import axios from 'axios';
import React, { Component } from 'react'
import { RiUser2Fill } from 'react-icons/ri';
import './users.scss'

export class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoaading: true,
      isOpen: false
    };
  }

  componentDidMount() {
    axios
      .get("http://liveapi.chatscrum.com/scrum/api/scrumusers/")
      .then((res) =>
        this.setState({
          users: res.data,
        })
      );
  }

  toggleModal = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
      console.log("modal is open");
    } else {
      this.setState({
        isOpen: true
      });
    }
  };

  
  

  render() {


    return (
      <div className="main">
        <h4 onClick={() => this.toggleModal()}>connected users</h4>
        <div id="user-list" className={this.state.isOpen ? "show" : "hidden"}>
          {this.state.users.map(({ nickname, id }) => {
            return (
              <div className="user" key={id}>
                <span>
                  {" "}
                  <RiUser2Fill />
                </span>{" "}
                {nickname}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users