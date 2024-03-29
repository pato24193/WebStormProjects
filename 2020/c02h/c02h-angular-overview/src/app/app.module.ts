import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CalculatorComponent} from './calculator.component';
import {FormsModule} from '@angular/forms';
import { CalculatorGenComponent } from './calculator-gen/calculator-gen.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorGenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
