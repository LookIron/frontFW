import React, { Component } from 'react';
import './Tasks.css';
import Task from  "./Task"
import AddTask from  "./AddTask"

class Tasks extends Component {
  constructor(){
  	super();
  }

  componentWillMount(){
	 let tasks =  [
	  		{
	  			name: "Organizar escritorio",
	  			category: "laboral"
	  		 },
	  		{
	  			name: "Requerimientos",
	  			category: "WebP"
	  		 },
	  		{
	  			name: "Pagar servicios",
	  			category: "personal"
	  		 },
	 	];

	 this.setState(
	 		{'tasks': tasks}
	 	);

  }

  handleAddTask(task){
  	let tasks = this.state.tasks;
  	tasks.push(task);
 	 this.setState(
	 	{	'tasks': tasks}
	 	);
  }



  render() {
  	let taskList = this.state.tasks.map( (task) =>
  		{
  		  return (
  		  	<Task key={task.name} task={task} />
  		  	);
  		 }
  		);
    return (
      <div className="Tasks">
      	<h1>Las tareas de {this.props.person} </h1>
      	<ul>
      		{taskList}
      		<AddTask addTask={this.handleAddTask.bind(this)}/>
      	</ul>
      </div>
    );
  }
}

export default Tasks;
