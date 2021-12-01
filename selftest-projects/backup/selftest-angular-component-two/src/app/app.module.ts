import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';
import { ParentComponent } from './parent/parent.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { StockStatusComponent } from './stock-status/stock-status.component';
import {FormsModule} from "@angular/forms";
import { NgForAndNgIfTestComponent } from './ng-for-and-ng-if-test/ng-for-and-ng-if-test.component';
import { NgClassAndNgStyleComponent } from './ng-class-and-ng-style/ng-class-and-ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    ParentComponent,
    ProductPageComponent,
    StockStatusComponent,
    NgForAndNgIfTestComponent,
    NgClassAndNgStyleComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
