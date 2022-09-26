import { useState} from "react";
import Data from "../static/data";
import {Link} from 'react-router-dom'

import "./scrumbaord.scss";
import {Tasks} from "../tasks/tasks";
import { taskList1, taskList2 } from "../static/task";


import {AddTask} from "../addTask/addTask";

function Scrumboard() {
  const [data] = useState(Data);
  const [tasks, setTasks] = useState(taskList1);
  const [tasks2] = useState(taskList2);

 

 

  const addTask = (task1) => {
    const unique = Math.random().toString(36).slice(2,9)
    task1.id = unique
    let Tasks1 = [...tasks, task1]
    setTasks(Tasks1)

  }



  const deleteTask = (id) => {
    const Tasks1 = tasks.filter(item =>  item.id !== id)
    
    setTasks(Tasks1)
  }

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
          <Tasks daily={tasks} weekly={tasks2} deleteTask={deleteTask} />
        </div>
      </div>

      <AddTask addTask={addTask} />
    </div>
  );
}

export default Scrumboard;
