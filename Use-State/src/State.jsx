import  { Component } from "react";

export default class State extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         count : 10
      }
    }

    increaseNumber = () => {
      this.setState({
        count: this.state.count + 1
      })
      
    }
    
    render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.increaseNumber}>+</button>
        <button type="button">{this.decreaseNumber}</button>
      </div>
    );
  }
}
