import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: false,
  // imports: [SharedModule, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  //  @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

  // older way using event emit
  //  // no need for parameter id, why?
  //  onCompleteTask(){
  //   this.complete.emit(this.task.id);
  //  }
}
