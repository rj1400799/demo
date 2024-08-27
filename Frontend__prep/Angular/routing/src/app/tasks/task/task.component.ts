import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [DatePipe, CardComponent],
})
export class TaskComponent {
  task = input.required<Task>();
  private tasksService = inject(TasksService);
  private router = inject(Router);
  private activatedRoute  = inject(ActivatedRoute);

  onComplete() {
    this.tasksService.removeTask(this.task().id);

    // when something is not getting updated, you have to reload the route, so that the respective's comp
    // reloads and refetched through related service, 
    // for ex: 
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute,
      onSameUrlNavigation: 'reload',
      // to preserve queryParams
      queryParamsHandling: 'preserve'
    })
  }
}
