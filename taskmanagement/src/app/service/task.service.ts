// task.service.ts
import { Injectable } from '@angular/core';
import { Task } from '../interface/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  nextId = 0;

  constructor() {
    this.loadTasksFromLocalStorage();
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  addTask(task: Task): void {
    task.id = this.nextId++;
    this.tasks.push(task);
    this.saveTasksToLocalStorage();
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.saveTasksToLocalStorage();
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasksToLocalStorage();
    this.getTasks();
  }

  private loadTasksFromLocalStorage(): void {
    const tasksStr = localStorage.getItem('tasks');
    if (tasksStr) {
      this.tasks = JSON.parse(tasksStr);
    }
  }

  private saveTasksToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  markTaskAsCompleted(id: number): void {
    const task = this.getTaskById(id);
    if (task) {
      task.completed = true;
    }
  }
}
