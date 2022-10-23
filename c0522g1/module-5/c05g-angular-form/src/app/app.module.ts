import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormTestComponent} from './reactive-form-test/reactive-form-test.component';
import {TemplateDrivenFormTestComponent} from './template-driven-form-test/template-driven-form-test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormTestComponent,
    TemplateDrivenFormTestComponent
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
