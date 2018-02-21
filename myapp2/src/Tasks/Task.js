import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
        <li>{this.props.task.category} - {this.props.task.name}</li>
    );
  }
}

export default Task;
