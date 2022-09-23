import { useState, useEffect } from "react";
import Data from "../static/data";
import { IoClose } from "react-icons/io5";
import {Link} from 'react-router-dom'

import "./scrumbaord.scss";
import {Tasks} from "../tasks/tasks";
import { taskList1, taskList2 } from "../static/task";

import { DragDropContext } from "react-beautiful-dnd";

function Scrumboard() {
  const [data] = useState(Data);
  const [isOpen, setIsOpen] = useState(false);
  const [setTask] = useState(null);

  const [dailyTask, setDailyTask] = useState(taskList1);
  const [weeklyTask, setWeeklyTask] = useState(taskList2);

  useEffect(() => {
    setDailyTask(taskList1);
    setWeeklyTask(taskList2);
  }, []);

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
        let tempdailyTask = dailyTask;
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
      let tempdailyTask = dailyTask;
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

  const openModal = () => {
    setIsOpen(true);
    console.log("modal open");
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setTask("");
  };

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
            <Tasks dailyTask={dailyTask} weeklyTask={weeklyTask} />
          </div>
        </div>
        <div id="modal" className={isOpen ? "show" : "hidden"}>
          <div className="header">
            <h3>Add new task</h3>
            <h3 id="close" onClick={() => closeModal()}>
              {" "}
              <IoClose />{" "}
            </h3>
          </div>

          <form onSubmit={handleSubmit}>
            <input type="text" name="" id="inputField" onChange={onChange} />
            <button className="confirm">CONFIRM</button>
          </form>
        </div>

        <button
          style={{ marginTop: "1.5rem" }}
          id="add"
          className={isOpen ? "btn-hide" : null}
          onClick={() => openModal()}
        >
          {" "}
          ADD TASK
        </button>
      </div>
    </DragDropContext>
  );
}

export default Scrumboard;
