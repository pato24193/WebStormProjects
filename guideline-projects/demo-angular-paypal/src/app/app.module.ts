import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {PaypalComponent} from './paypal/paypal.component';
import {NgxPayPalModule} from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    PaypalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
