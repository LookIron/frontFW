import React, { Component } from 'react';




class Task extends Component {
  handleOnClick(e){
  	e.preventDefault();
  	//console.log(task);
  	this.props.delTask(this.props.task.name);
  }

  render() {
    return (
        <li>{this.props.task.category} - {this.props.task.name} <a href="#" onClick={this.handleOnClick.bind(this)}>Eliminar</a></li>
    );
  }
}

export default Task;
