import { Component, Input } from '@angular/core';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-list',
  template: `
    <mat-list-item *ngFor="let vendor of vendors">
      {{ vendor.id }} - {{ vendor.name }},
    </mat-list-item>
  `,
})

export class VendorListComponent {

  @Input() vendors?: Vendor[];

}
