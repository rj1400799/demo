import { TasksComponent } from "../tasks/tasks.component"
import { canLeaveEditPage, NewTaskComponent } from "../tasks/new-task/new-task.component"

import { Routes } from "@angular/router";

export const routes: Routes = [
   // if path is '../users/id, i want to redirect to users/id/tasks, do as below
   {
     path: '', 
     redirectTo: 'tasks',
     pathMatch: 'prefix'
   },
   {
      path: 'tasks', // <your-domain>/users/<uid>/tasks
      component: TasksComponent
   },
   {
      path: 'tasks/new',
      component: NewTaskComponent,
      canDeactivate: [canLeaveEditPage]
   }
]