import { useState, useEffect } from "react";
import Data from "../static/data";
import {Link} from 'react-router-dom'

import "./scrumbaord.scss";
import {Tasks} from "../tasks/tasks";
import { taskList2 } from "../static/task";

import { DragDropContext } from "react-beautiful-dnd";
import {AddTask} from "../addTask/addTask";

function Scrumboard() {
  const [data] = useState(Data);
  const [tasks, setTasks] = useState([
    "Read bible",
    "Do an hour worship",
    "Do quiet time",
    "Surf the internet",
    "Review codes and debug",
    "Read a book",
    "Write an article",
  ]);

  const [dailyTask, setDailyTask] = useState(tasks);
  const [weeklyTask, setWeeklyTask] = useState(taskList2);

  useEffect(() => {
    setDailyTask(tasks);
    setWeeklyTask(taskList2);
  }, [tasks]);

  // Function for deleting items from list using index
  const deleteItem = (list, index) => {
    return list.splice(index, 1);
  };

  // Function called when Drag Ends
  const onDragEnd = (result) => {
    // getting the source and destination object
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === "daily") {
        let tempdailyTask = Array.from(dailyTask);
        const removed = deleteItem(tempdailyTask, source.index);
        tempdailyTask.splice(destination.index, 0, removed);
        setDailyTask(tempdailyTask);
      } else {
        let tempweeklyTask = weeklyTask;
        const removed = deleteItem(tempweeklyTask, source.index);
        tempweeklyTask.splice(destination.index, 0, removed);
        setWeeklyTask(tempweeklyTask);
      }
    } else {
      let tempdailyTask = Array.from(dailyTask);
      let tempweeklyTask = weeklyTask;
      if (source.droppableId === "daily") {
        const removed = deleteItem(tempdailyTask, source.index);
        tempweeklyTask.splice(destination.index, 0, removed);
        setDailyTask(tempdailyTask);
        setWeeklyTask(tempweeklyTask);
      } else {
        const removed = deleteItem(tempweeklyTask, source.index);
        tempdailyTask.splice(destination.index, 0, removed);
        setDailyTask(tempdailyTask);
        setWeeklyTask(tempweeklyTask);
      }
    }
  };


  const addTask = (task) => {
    task.id = Math.random().toString(36).slice(2,9)
    let Tasks = [...tasks, task]
    setTasks(Tasks)

  }

  console.log(tasks);

  const deleteTask = (id) => {
    const Tasks = tasks.filter(item =>  item.id !== id
    )
    setTasks(Tasks)
  }

  console.log(data);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
            <Tasks   data = {dailyTask} dailyTask={dailyTask} weeklyTask={weeklyTask} />
          </div>
        </div>
       
            <AddTask addTask={addTask} deleteTask={deleteTask} />    

      </div>
    </DragDropContext>
  );
}

export default Scrumboard;
