import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    ListTasksComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
