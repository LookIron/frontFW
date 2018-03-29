import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, 
	AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { Task } from  '../models/task';



@Injectable()
export class TaskService {
	taskCollection: AngularFirestoreCollection<Task>; 
	taskDocument: AngularFirestoreDocument<Task>;
	tasks: Observable<Task[]>;


  constructor(db: AngularFirestore) {
  	this.taskCollection = db.collection('tasks');
    this.tasks = this.taskCollection.valueChanges();
  }

  getTasks(){
  	return this.tasks;
  }

  addTask(task: Task){
  	this.taskCollection.add(task);
  }

  delTask(task: Task){
  	    return this.taskCollection.doc(task.$key);

  }

}
