import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestNgIfComponent } from './test-ng-if/test-ng-if.component';
import {FormsModule} from '@angular/forms';
import { TestNgClassComponent } from './test-ng-class/test-ng-class.component';
import { TestNgStyleComponent } from './test-ng-style/test-ng-style.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { TestCustomPipeComponent } from './test-custom-pipe/test-custom-pipe.component';
import { TempConverterPipe } from './temp-converter.pipe';
import { TestCustomDirectiveComponent } from './test-custom-directive/test-custom-directive.component';
import { HighLightDirective } from './high-light.directive';
import { AppNotDirective } from './app-not.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestNgIfComponent,
    TestNgClassComponent,
    TestNgStyleComponent,
    TestPipeComponent,
    TestCustomPipeComponent,
    TempConverterPipe,
    TestCustomDirectiveComponent,
    HighLightDirective,
    AppNotDirective
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
