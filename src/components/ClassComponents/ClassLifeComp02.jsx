import React, { Component } from "react";

export class ClassLifeComp02 extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>Class Component with LifeCycle Practice </h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <h2>Coun a Number: {this.state.count}</h2>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}
