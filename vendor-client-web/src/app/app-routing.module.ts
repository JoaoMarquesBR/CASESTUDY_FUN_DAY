import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorHomeComponent } from './vendor/vendor-home/vendor-home.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent, title: 'CaseStudy - Home' },
  // { path: '', component: HomeComponent, title: 'CaseStudy - Home' },
  { path: 'vendors', component: VendorHomeComponent, title: 'CaseStudy - Vendors' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
