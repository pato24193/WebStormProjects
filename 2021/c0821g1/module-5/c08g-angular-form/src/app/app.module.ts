import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateDrivenFormTestComponent } from './template-driven-form-test/template-driven-form-test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormTestComponent } from './reactive-form-test/reactive-form-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormTestComponent,
    ReactiveFormTestComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
