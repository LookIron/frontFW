import React, { Component } from 'react';
import './Tasks.css';
import Task from  "./Task";
import AddTask from  "./AddTask";
import $ from "jquery";

class Tasks extends Component {
 
 constructor(){
  super();
  let tasks = [];
  this.state = { tasks: tasks};

 }


  componentWillMount(){

    $.ajax({
        url: "https://raw.githubusercontent.com/leobusar/frontFW/master/projectsTest.json",
        cache: false,
        dataType: "json",
        success: function(data){
          this.setState({"tasks": data}) ;
          console.log(data);
        }.bind(this),
        error: function(xhr, status,err){
          console.log(err);
        }
      });
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

    //tasks.push(task);
    let index = tasks.findIndex( (task) => {return(task.name === name)} );
    tasks.splice(index,1);

   this.setState(
    { 'tasks': tasks}
    );

    console.log('term:'+ index);
  }


  render() {
  	let taskList = this.state.tasks.map( (task) =>
  		{
  		  return (
  		  	<Task key={task.name} task={task} delTask={this.handleDelTask.bind(this)}/>
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
