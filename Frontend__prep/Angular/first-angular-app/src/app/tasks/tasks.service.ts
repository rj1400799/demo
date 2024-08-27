import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

// when encounters a dependency injection, angular will not look up for all files
// therefore you have mention explicilty that this service class is injectable using
// this decorator, then when encountered, it will only create one obj in memory and hence
// multiple components use the same.
@Injectable({ providedIn: 'root' })
export class TasksService {
  // performs some operations or manages some data which is needed by multiple components

  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular - 1 ',
      summary: 'Learn all the stuff',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular - 2',
      summary: 'Learn all the stuff',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Master Angular - 3',
      summary: 'Learn all the stuff',
      dueDate: '2025-12-31',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: userId,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
