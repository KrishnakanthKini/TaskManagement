// task-update.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/interface/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.scss'],
})
export class TaskUpdateComponent implements OnInit {
  task: any = {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),
    completed: false,
  };

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('this.ats', this.task);
    const taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(taskId);
  }

  onSubmit(): void {
    this.taskService.updateTask(this.task);
    this.router.navigate(['/tasks/read']);
  }
}
