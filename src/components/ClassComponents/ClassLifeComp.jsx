import React, { Component } from "react"; //(1)
import ClassLifeChild from "./ClassLifeChild";

export class ClassLifeComp extends Component {
  //(2)
  //to manage the state
  constructor() {
    //(3)
    super(); //(4)
    //when you want to extends class and you want to use "this" then you have to use super
    this.state = { count: 0 }; //(5)
  }
  //(12)
  componentDidUpdate() {
    document.title = this.state.count + 3;
  }
  //(11)
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    //(6)
    return (
      //(7)
      <div>
        {/* (8) */}
        <h1>class comp Counter</h1>
        {/* (10) */}
        <h2>count: {this.state.count}</h2>
        {/* (9) */}
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}> */}
        {/* try increment with different method (handleIncrement)*/}
        {/* now try Increment with child */}
        {/* <button onClick={this.handleIncrement}>Increment</button> */}
        {/* (13) */}
        <ClassLifeChild anyName={this.handleIncrement} />
      </div>
    );
  }
}
