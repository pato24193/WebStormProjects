import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {StudentModule} from './student/student.module';
import {HttpClientModule} from '@angular/common/http';
import {FormArrayTestComponent} from './form-array-test/form-array-test.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormArrayTestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StudentModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
