import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { MatComponentsModule } from '../mat-components/mat-components.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    // VendorDetailComponent,
    VendorHomeComponent,
    VendorListComponent
  ],
  imports: [
    CommonModule,
    MatComponentsModule,
    ReactiveFormsModule
  ]
})
export class VendorModule { }
