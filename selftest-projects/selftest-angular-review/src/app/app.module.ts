import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TestDatepickerModule} from './test-datepicker/test-datepicker.module';
import { TestRoutingComponent } from './test-routing/test-routing/test-routing.component';
import {RouterModule} from '@angular/router';
import {TestRoutingModule} from './test-routing/test-routing.module';
import {TestBootstrapModule} from './test-bootstrap/test-bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    TestRoutingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TestDatepickerModule,
    RouterModule,
    TestRoutingModule,
    TestBootstrapModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
