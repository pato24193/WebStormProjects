import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorPageComponent } from './instructor-page/instructor-page.component';



@NgModule({
    declarations: [InstructorPageComponent],
    exports: [
        InstructorPageComponent
    ],
    imports: [
        CommonModule
    ]
})
export class InstructorModule { }
