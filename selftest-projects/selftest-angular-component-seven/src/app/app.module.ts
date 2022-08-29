import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgForAndNgIfTestComponent } from './ng-for-and-ng-if-test/ng-for-and-ng-if-test.component';
import { NgStyleAndNgClassComponent } from './ng-style-and-ng-class/ng-style-and-ng-class.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NgForAndNgIfTestComponent,
    NgStyleAndNgClassComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
