import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {StudentModule} from './student/student.module';
import {InstructorModule} from './instructor/instructor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StudentModule,
    InstructorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
