import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { NgForAndNgIfComponent } from './ng-for-and-ng-if/ng-for-and-ng-if.component';
import { NgStyleAndNgClassComponent } from './ng-style-and-ng-class/ng-style-and-ng-class.component';
import {FormsModule} from '@angular/forms';
import { PipeTestComponent } from './pipe-test/pipe-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    NgForAndNgIfComponent,
    NgStyleAndNgClassComponent,
    PipeTestComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
