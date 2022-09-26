import { Component } from "react";
import Data from "../static/data";
import "./scrumbaord.scss";


import { DragDropContext } from "react-beautiful-dnd";

class Scrumboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Data,
      isOpen: false,
      tasks: [],
    };
  }


addTask = (task) => {
    task.id = Math.random().toString(36).slice(2,9)
    let tasks = [...this.state.tasks, task]
    this.setState({
        tasks
    })
  }



  
  render() {

    return <DragDropContext>

            </DragDropContext>;
  }
}

export default Scrumboard;
