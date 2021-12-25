import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {StudentModule} from './student/student.module';
import {HttpClientModule} from '@angular/common/http';
import {InstructorModule} from './instructor/instructor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StudentModule,
    HttpClientModule,
    InstructorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
