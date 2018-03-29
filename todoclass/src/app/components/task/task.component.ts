import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

	owner:string ;
	tasks: Task[];
	task: Task;

  constructor(public taskService: TaskService) { 
  	this.owner = "Leonardo B";
  	this.task = {"id":"","name":"","category":""};
  	/*this.tasks = [
					{
						"name": "Organizar escritorio",
						"category": "laboral"
					},
					{
						"name": "Requerimientos",
						"category": "WebP"
					},
					{
						"name": "Pagar servicios",
						"category": "personal"
					},
					{
						"name": "Preparar proyecto", 
						"category": "WebP"
					}
				];*/
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe( (tasks) => {
      //console.log(tasks);
      this.tasks = tasks;  
    }

      );
  }

  addTask(){
  /*	let task: Task;
  	task = {
  		name: this.task.name,
  		category: this.task.category
  	};
  	this.tasks.push(task);
  */	
    this.task = {"id":"", "name":"","category":""};
  
    this.taskService.addTask(this.task);
  }

   delTask(e, task:Task){   


/*
    let index = this.tasks.findIndex( 
    	(taskM) => {return(taskM.name === task.name)} );
    this.tasks.splice(index,1);
*/
  	console.log(task);
    this.taskService.deleteTask(task);

   
  }
}
