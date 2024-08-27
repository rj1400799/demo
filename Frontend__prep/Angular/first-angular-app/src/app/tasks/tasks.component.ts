import { Component, Input, WritableSignal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  // imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) user!: string;
  isAddingTask: boolean = false;
  // if we do as below, we create instance of this obj but if we have to use this service in
  // another component we have to again create a separate independent instance
  // big issue is that if we change data in one instance, it won't reflect in another comp,
  // as we are operating in different instances.
  // private tasksService = new TasksService();

  // therefore we have dependency injection
  // here you won't create a instance, angular handles this creation of instance
  // and this instance is used for diff components
  // therefore you would then be operating on the same data

  // Dependency injection: you tell angular which type of value you need and
  // angular creates it and provides it as an argument
  // just give a parameter of that service type and angular will create it for you
  // give private in before it will then create a property for you inside this class
  // or you have to create a property and assign this.prop = prop inside construtor
  // use shortcut
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {}

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
