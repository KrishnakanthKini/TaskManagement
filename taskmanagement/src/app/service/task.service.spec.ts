import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Task } from '../interface/task.model';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize tasks array', () => {
    const tasks = service.getTasks();
    expect(tasks).toEqual([]);
  });

  it('should add a task', () => {
    const task: Task = { id: 1, title: 'Test Task', description: 'This is a test task', completed: false ,dueDate:new Date(2020-10-10)};
    service.addTask(task);
    const tasks = service.getTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0]).toEqual(task);
  });

  it('should update a task', () => {
    const initialTask: Task = { id: 1, title: 'Test Task', description: 'This is a test task', completed: false,dueDate:new Date(2020-10-10) };
    service.addTask(initialTask);
    const updatedTask: Task = { id: 1, title: 'Updated Task', description: 'This is an updated task', completed: false,dueDate:new Date(2020-10-10) };
    service.updateTask(updatedTask);
    const tasks = service.getTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0]).toEqual(updatedTask);
  });

  it('should delete a task', () => {
    const task: Task = { id: 1, title: 'Test Task', description: 'This is a test task', completed: false,dueDate:new Date(2020-10-10) };
    service.addTask(task);
    service.deleteTask(1);
    const tasks = service.getTasks();
    expect(tasks.length).toBe(0);
  });

  it('should mark a task as completed', () => {
    const task: Task = { id: 1, title: 'Test Task', description: 'This is a test task', completed: false ,dueDate:new Date(2020-10-10)};
    service.addTask(task);
    service.markTaskAsCompleted(1);
    const updatedTask = service.getTaskById(1);
    expect(updatedTask?.completed).toBe(true);
  });
});