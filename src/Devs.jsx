import React, { Component } from 'react'

class Devs extends Component {
    render() { 

        const {name, age, skill} = this.props

        console.log(name, skill)
        return (
          <div>
            <h1>Hello class! :)</h1>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Skill: {skill}</li>
            </ul>
          </div>
        );
    }
}
 
export default Devs;