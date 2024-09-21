import { Component } from '@angular/core';
import { ApidataService } from '../Service/apidata.service';
import { ShipmentData } from '../Service/interfaces';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.scss'
})
export class ShipmentComponent {
  public data:any;
  public shipments:ShipmentData[]=[];
  constructor(private apidataservice: ApidataService, private location: Location, private router:Router) {
   
  }

  ngOnInit(): void {
    this.apidataservice.shipmentData().subscribe((response) => {
      this.data = response;
      this.shipments = response?.Shipments?.Shipment;
      console.log(this.data,this.shipments);
    });
  }

  goBack(): void {
    this.location.back();
  }

  navigateToShipmentDetail(id:string): void {
     this.router.navigate(["/product-detail",id]);
  }
}
