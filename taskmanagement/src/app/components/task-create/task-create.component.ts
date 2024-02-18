// task-create.component.ts
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/interface/task.model';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss'],
})
export class TaskCreateComponent {
  @ViewChild('taskForm') taskForm!: NgForm; // Reference to the form

  task: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),
    completed: false,
  };

  constructor(private taskService: TaskService, private router: Router) {}

  onSubmit(): void {
    this.taskService.addTask(this.task);
    this.router.navigate(['/tasks/read']);
  }
}
