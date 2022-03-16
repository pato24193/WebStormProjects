import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {InstructorPageComponent} from './instructor-page/instructor-page.component';

const routes: Routes = [
  {path: '', component: InstructorPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InstructorRoutingModule {
}
