import React, {Component} from 'react'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Linuxjobber",
      skill: "",
      session: "",
      isBackgroundRed: true,
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name
    this.setState({
      ...this.state,
      [name]: value
    });
    console.log(`${value}`);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `this form submited ${this.state.skill} and ${this.state.session}`
    );
     //const name = e.target.name;
     const value = e.target.value;
     this.setState((values) => ({ ...values, [value]: ''}));
  };

  handleClick = () => {
    console.log("Button click");
  };

  handleMouseOver = () => {
    console.log("You just mouse over a button");
  };

  handleMouseDown = () => {
    console.log("You just mouse Down a button");
  };

  handleKeyUp = () => {
    this.setState({ isBackgroundRed: false });
    console.log("The b-color changed to blue as you key up");
  };

  handleKeyDown = () => {
    this.setState({ isBackgroundRed: true });
    console.log("The b-color changed to red as you keydown");
  };

  render() {
    return (
      <div
        className={`App ${
          this.state.isBackgroundRed ? "background-red" : "background-blue"
        }`}
      >
        <h1>Greeting from {this.state.name}</h1>
        <p>
          We welcome all intern to {this.state.session} {this.state.skill}{" "}
          classs
        </p>
        <button onClick={this.handleClick}>Onclick</button>
        <button onMouseOver={this.handleMouseOver}>mouseover</button>
        <button onMouseDown={this.handleMouseDown}>  Mousedown</button>
        Type to change background:{" "}
        <input
          type="text"
          id="fname"
          onKeyUp={this.handleKeyUp}
          onKeyDown={this.handleKeyDown}
        />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="enter session here"
            name="session"
            value={this.state.session}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="enter skill here"
            name="skill"
            value={this.state.skill}
            onChange={this.handleChange}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default App;
