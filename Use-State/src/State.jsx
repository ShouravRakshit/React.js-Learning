import React, { Component } from "react";

export default class State extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    
    render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
      </div>
    );
  }
}
