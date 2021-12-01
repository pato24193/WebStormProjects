import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TestRoutingComponent} from './test-routing/test-routing.component';
import {TestRoutingDetailComponent} from './test-routing-detail/test-routing-detail.component';
import {TestDatepickerComponent} from '../test-datepicker/test-datepicker/test-datepicker.component';

const routes: Routes = [
  {
    path: 'routing-parent',
    component: TestRoutingComponent,
    children: [
      {path: 'routing-detail/:id', component: TestRoutingDetailComponent},
      {path: 'routing-detail-redirect', redirectTo: 'routing-detail/6', pathMatch: 'full'}
    ]
  },
  {
    path: 'datepicker-parent',
    component: TestDatepickerComponent
  },
  {
    path: 'datepicker-parent-redirect',
    redirectTo: 'datepicker-parent',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [TestRoutingDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class TestRoutingConfigModule {
}
