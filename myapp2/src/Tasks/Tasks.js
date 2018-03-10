import React, { Component } from 'react';
import './Tasks.css';
import Task from  "./Task";
import AddTask from  "./AddTask";
import $ from 'jquery';

class Tasks extends Component {
  constructor(){
  	super();
  }

  componentWillMount(){
	 let tasks =  [] 
   /*[
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
	 	]; */

$.ajax({
  url: "https://raw.githubusercontent.com/leobusar/frontFW/master/projectsTest.json",
  dataType: "json",
  cache: false, 
  success: function(data){

    this.setState({tasks: data);
    console.log(this.state.tasks);
  }.bind(this),
  error: function(xhr, status,err){
    console.log(err);
  }
});    
    

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

  handleDelTask(name){
    let tasks = this.state.tasks;
    let index = tasks.findIndex((task)=> {task.name===name});
    tasks.splice(index,1);
   this.setState(
    { 'tasks': tasks}
    );
  }

  render() {
  	let taskList = this.state.tasks.map( (task) =>
  		{
  		  return (
  		  	<Task key={task.name} task={task} delTask={this.handleDelTask.bind(this)} />
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
