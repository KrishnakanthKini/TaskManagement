// task-read.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss'],
})
export class TaskReadComponent implements OnInit {
  tasks!: any;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onDelete(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/tasks/read']);
    });
  }

  onCancel(): void {
    this.router.navigate(['/tasks/read']);
  }

  onUpdate(id: number): void {
    const task = this.taskService.getTaskById(id);
    this.router.navigate(['/tasks/update/', id]);
  }
  onViewDetails(id: number): void {
    const task = this.taskService.getTaskById(id);
    this.router.navigate(['/tasks/readDetails/', id]);
  }
  markAsCompleted(id: number): void {
    this.taskService.markTaskAsCompleted(id);
  }
}
