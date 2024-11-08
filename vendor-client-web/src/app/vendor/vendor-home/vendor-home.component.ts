import { Component } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styles: ``,
})
export class VendorHomeComponent {
  vendors: Array<Vendor>;
  msg: string;

  constructor(public vendor_service: VendorService) {
    this.vendors = [];
    this.msg = '';
  }

  ngOnInit(): void {
    this.msg = 'loading vendors from server...';

    this.vendor_service.get().subscribe({
      next: (payload: any) => {
        this.vendors = payload._embedded.vendors;
        this.msg = 'vendors loaded!!';
      },
      error: (err: Error) => (this.msg = `Get failed! - ${err.message}`),
      complete: () => {},
    }); // subscribe
  }
}
