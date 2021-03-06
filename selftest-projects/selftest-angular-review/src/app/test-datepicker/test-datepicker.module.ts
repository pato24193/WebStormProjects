import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDatepickerComponent } from './test-datepicker/test-datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [TestDatepickerComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  exports: [
    TestDatepickerComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ]
})
export class TestDatepickerModule { }
