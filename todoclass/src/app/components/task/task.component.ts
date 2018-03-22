import { Component, OnInit } from '@angular/core';
import { Task } from  '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

	owner:string;
	tasks:Task[];
	task:Task;

  constructor() { 
  	this.owner = "Leonardo Busta";
  //	this.tasks = [];
  	this.task = {"name": "", "category": ""};
 		this.tasks =[
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
  }

  ngOnInit() {

  }

  onAddTask() {
  	let task1:Task;

/*  	task1.category = this.task.category;
  	task1.name = this.task.name;
*/
		task1 = {
			"category": this.task.category,
			"name": this.task.name
		}

  	this.tasks.push(task1);

  }

  delTask(e, task:Task){

  	console.log(task);
  }

}
