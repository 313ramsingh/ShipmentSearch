import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SHIPPING_PAGE_URL } from '../../Service/constant';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent {

  @Input() iconValue?: string;
  @Input() userString?: string;

  public shipmentId?: string;

  constructor(private location: Location, private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    if(this.router.url != SHIPPING_PAGE_URL) {
      this.route.params.subscribe(params => {
        this.shipmentId = params['productId'];
      });
    }
  }

  goBack(): void {
    this.location.back();
  }


  navigateToHome(): void {
    this.router.navigateByUrl('/');
  }
}
