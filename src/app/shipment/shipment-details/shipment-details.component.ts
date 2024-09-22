import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApidataService } from '../../Service/apidata.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrl: './shipment-details.component.scss'
})
export class ShipmentDetailsComponent {

  private shipmentId?: string;
  public data?: any;
  public showFullDetails?: boolean;

  constructor(private route: ActivatedRoute, private apidataservice: ApidataService, private location: Location) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.shipmentId = params['productId'];
    });

    this.apidataservice.shipmentDetailData().subscribe((data) => {
      data.Shipment.forEach((shipmentData: any) => {
        if (shipmentData?.ShipmentNo == this.shipmentId)
          this.data = shipmentData;
      })

    })
  }

}
