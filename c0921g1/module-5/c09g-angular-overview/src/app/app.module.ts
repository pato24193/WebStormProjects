import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorTestComponent } from './calculator-test/calculator-test.component';
import {FormsModule} from '@angular/forms';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorTestComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
