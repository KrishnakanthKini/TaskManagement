import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskUpdateComponent } from './components/task-update/task-update.component';

import { TaskReadComponent } from './components/task-lists/task-lists.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks/create', pathMatch: 'full' },
  { path: 'tasks/create', component: TaskCreateComponent },
  { path: 'tasks/update/:id', component: TaskUpdateComponent },
  { path: 'tasks/read', component: TaskReadComponent },
  { path: 'tasks/readDetails/:id', component: TaskDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
