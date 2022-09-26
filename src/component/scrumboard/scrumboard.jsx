import React, { Component } from "react";
import Data from "../static/data";
import { Link } from "react-router-dom";

import "./scrumbaord.scss";
import { Tasks } from "../tasks/tasks";
//import { taskList1} from "../static/task";

import { AddTask } from "../addTask/addTask";
import Users from "../users/users";
import axios from "axios";

export class Scrumboard extends Component {
  constructor() {
    super();
    this.state = {
      data: Data,
      weekly: [],
      tasks: [],
    };
  }

  addTask = (task) => {
    task.id = Math.random().toString(36).slice(2, 9);
    let tasks = [...this.state.tasks, task];
    this.setState({tasks});
  };

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((item) => item.id !== id);

    this.setState({tasks});
  };

  componentDidMount() {
    axios
      .get("http://liveapi.chatscrum.com/scrum/api/scrumgoals/")
      .then((res) => this.setState({ tasks: res.data }));
  }



  render() {
    const { tasks, data, weekly } = this.state;
    const { addTask, deleteTask } = this;
    return (
      <div className="scrumboard">
        <nav>
          <Link style={{ textDecoration: "none" }} to="/">
            <strong>
              <h1
                style={{
                  padding: "0.8rem",
                  cursor: "pointer",
                  color: "rgb(241, 38, 38)",
                }}
              >
                Chatscrum
              </h1>
            </strong>
          </Link>
          <div
            style={{ color: "#e91e63", paddingRight: "3rem" }}
            className="user"
          >
            <p>
              User Type:{" "}
              <strong style={{ color: "#022949" }}>{data.userType}</strong>
            </p>
            <p>
              Project:{" "}
              <strong style={{ color: "#022949" }}>{data.projectName}</strong>
            </p>
          </div>
        </nav>
        <div id="info-container">
          <p id="info">Hello, {data.fullname} welcome to your scrumboard</p>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ width: "60%", margin: "auto" }}>
            <Tasks daily={tasks} weekly={weekly} deleteTask={deleteTask} />
          </div>
        </div>

        <AddTask addTask={addTask} />

        <Users />
      </div>
    );
  }
}
