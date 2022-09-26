import React, { Component } from 'react'
import { IoClose } from 'react-icons/io5';

export class AddTask extends Component {
    state = {
        content: ''
    }

    openModal = () => {
        this.setState({
            isOpen: true
        });
        console.log("modal open");
    };

    closeModal = () => {
        this.setState({
            isOpen: false,
        });
     };

    onChange = (e) => {
        this.setState({
            content: e.target.value
        })     
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: false
        })
        this.props.addTask({content: this.state.content});

          this.setState({
            content: ""
          });  
    }

  render() {
    const isOpen = this.state.isOpen
    const {closeModal, handleSubmit, openModal, onChange} = this
    return (
      <div>
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
    );
  }
}

