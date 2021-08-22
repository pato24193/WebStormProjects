import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from '@angular/forms';
import { NgIfAndNgForTestComponent } from './ng-if-and-ng-for-test/ng-if-and-ng-for-test.component';
import { NgClassAndNgStyleComponent } from './ng-class-and-ng-style/ng-class-and-ng-style.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { StockStatusComponent } from './stock-status/stock-status.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NgIfAndNgForTestComponent,
    NgClassAndNgStyleComponent,
    ProductPageComponent,
    StockStatusComponent,
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
