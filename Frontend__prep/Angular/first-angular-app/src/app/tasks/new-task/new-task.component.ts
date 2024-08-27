import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = ''; // infers it's a string
  enteredSummary = '';
  enteredDate = '';
  // alternative to constructor way, i.e you don't instance but you use just the task service class
  // name as a so called injection token that's passed to inject
  private tasksService = inject(TasksService);

  onCloseAddTaskModal() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);
    this.close.emit();
  }

  // prev way of emitting data, now above we have used services concept
  // onSubmit() {
  //   this.add.emit({
  //     title: this.enteredTitle,
  //     summary: this.enteredSummary,
  //     date: this.enteredDate,
  //   });
  // }
}
