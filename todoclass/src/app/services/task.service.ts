import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, 
	AngularFirestoreDocument } from 'angularfire2/firestore';
import { Task } from '../models/task';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {
	taskCollection: AngularFirestoreCollection<Task>;
	tasks: Observable<Task[]>;
	//tasks: Task[]; 
	taskDoc: AngularFirestoreDocument<Task>;


  constructor(public db:AngularFirestore) { 
  	this.taskCollection = this.db.collection('tasks');
  //	this.tasks = this.taskCollection.valueChanges(); 
          this.tasks = this.taskCollection.snapshotChanges()
            .map(tasks => {
             //   this.countItems = actions.length;
                return tasks.map(task => ({ id: task.payload.doc.id, name: task.payload.doc.get("name"), category: task.payload.doc.get("category") }));
            });
  }

  getTasks(){
  	return this.tasks;
  }

  addTask(task: Task){
  	this.taskCollection.add(task);
  }

  deleteTask(task: Task){
  	let url = "tasks/"+task.id; 
  	this.taskDoc = this.db.doc(url);
  	this.taskDoc.delete();
  }
}
