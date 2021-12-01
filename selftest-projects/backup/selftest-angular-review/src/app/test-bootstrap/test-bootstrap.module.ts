import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestBootstrapComponent } from './test-bootstrap/test-bootstrap.component';



@NgModule({
    declarations: [TestBootstrapComponent],
    exports: [
        TestBootstrapComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TestBootstrapModule { }
