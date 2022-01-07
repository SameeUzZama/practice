import React, { Component } from "react";

class ClassLifeChild extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.anyName}>Increment</button>
      </div>
    );
  }
}

export default ClassLifeChild;
