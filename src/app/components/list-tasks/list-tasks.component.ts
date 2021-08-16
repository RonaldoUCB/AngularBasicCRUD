import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  @Output() sendPosition = new EventEmitter

  myTasks: Task[]

  constructor(private listServ: TaskService) { 
    this.myTasks = []
  }

  ngOnInit(): void {
    this.myTasks = this.listServ.getTasks()
    console.log("my tasks: ",this.myTasks)
  }

  completeTask(_id) {
    this.listServ.completeTask(_id)
  }

  deleteTask(_id){
    this.listServ.deleteTask(_id)
  }

  getPositions(_id) {
    this.sendPosition.emit(_id)
  }

}
