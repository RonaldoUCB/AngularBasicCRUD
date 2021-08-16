import { Injectable } from '@angular/core';
import { Task } from '../models/task';

const tasksList = [
  {
    "id": 1,
    "title": "do my homework",
    "description": "it is boring",
    "complete": false
  },
  {
    "id": 2,
    "title": "clean my room",
    "description": "it is boring too",
    "complete": false
  },
  {
    "id": 3,
    "title": "do whatever",
    "description": "ohh yeah",
    "complete": false
  }
]

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() {
    return tasksList;
  }

  getOneTask(_id) {
    return tasksList.find(task => task.id === _id)
  }

  addTask(task: Task) {
    tasksList.push(task)
  }

  editTask(newTaskEdit: Task) {
    const index = tasksList.findIndex(task => task.id === newTaskEdit.id)
    tasksList[index] = newTaskEdit
  }

  deleteTask(_id) {
    tasksList.splice(_id,1)
  }

  completeTask(index){
    tasksList[index].complete = true
  }

}
