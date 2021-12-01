import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import {ReactiveFormsModule} from "@angular/forms";
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {RouterModule} from "@angular/router";
import {StudentRoutingModule} from "./student-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    StudentUpdateComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    StudentRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
