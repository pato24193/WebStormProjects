import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgForTestComponent } from './ng-for-test/ng-for-test.component';
import { NgStyleAndNgClassTestComponent } from './ng-style-and-ng-class-test/ng-style-and-ng-class-test.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NgForTestComponent,
    NgStyleAndNgClassTestComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
