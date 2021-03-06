import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PromiseExampleComponent } from './promise-example/promise-example.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
