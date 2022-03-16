import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student',
    pathMatch: 'full'
  },
  {
    path: 'instructor',
    loadChildren: () => import('./instructor/instructor.module').then(module => module.InstructorModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(module => module.StudentModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
