import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DirectiveExComponent } from './directive-ex/directive-ex.component';
import { DirectiveExChildComponent } from './directive-ex-child/directive-ex-child.component';
import { PipeExComponent } from './pipe-ex/pipe-ex.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TestComponent } from './test.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { TestThreeComponent } from './test-three/test-three.component';
import { TestFourComponent } from './test-four/test-four.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DirectiveExComponent,
    DirectiveExChildComponent,
    PipeExComponent,
    ReactiveFormComponent,
    TestComponent,
    TestTwoComponent,
    TestThreeComponent,
    TestFourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
