import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      count: 0,
    };

    console.log("this.state.title :>> ", this.state.title);
  }
  render() {
    return (
      <div>
        <p>
          {this.state.title}: {this.state.count}
        </p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
}
