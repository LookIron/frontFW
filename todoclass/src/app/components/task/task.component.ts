import { Component, OnInit } from '@angular/core';
import { Task } from  '../../models/task';
import { TaskService } from  '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

	owner:string;
	tasks:Task[];
	task:Task;

  constructor(public taskService: TaskService) { 
  	this.owner = "Leonardo Busta";
  //	this.tasks = [];
		this.task = { "id":"", "category": "", "name": "" };
 /*		this.tasks =[
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
								];
  */
}

  ngOnInit() {

  	this.taskService.getTasks().subscribe((tasks)=>
  		console.log(tasks)
  		//this.tasks = tasks
  		  );
  }

  onAddTask() {
  /*	let task:Task;


		task = {
			"category": this.task.category,
			"name": this.task.name
		}
*/
		this.taskService.addTask(this.task);

		this.task = { "id":"", "category": "", "name": "" };


 // 	this.tasks.push(task);


  }

  delTask(e, task:Task){   

    let index = this.tasks.findIndex( 
    	(taskM) => {return(taskM.name === task.name)} );
    this.tasks.splice(index,1);


  	console.log(task);
  }

}
