import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {StockStatusComponent} from './stock-status/stock-status.component';
import {FormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { NgForAndNgIfTestComponent } from './ng-for-and-ng-if-test/ng-for-and-ng-if-test.component';
import { NgStyleAndNgClassComponent } from './ng-style-and-ng-class/ng-style-and-ng-class.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    StockStatusComponent,
    ChildComponent,
    ParentComponent,
    NgForAndNgIfTestComponent,
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
