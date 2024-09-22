import { Component } from '@angular/core';
import { ShipmentData } from '../Service/interfaces';
import { Router } from '@angular/router';
import { SHIPMENT_STATUS } from '../Service/constant';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedVariableServices } from '../Service/shared.variables.services';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.scss'
})
export class ShipmentComponent {
  //public data: any;
  public shipments: ShipmentData[] = [];
  public shipmentStatus = SHIPMENT_STATUS;

  public shipmentStatusForm = new FormGroup({
    0: new FormControl(true),
    1: new FormControl(true),
    2: new FormControl(true),
    3: new FormControl(true),
    4: new FormControl(true),
    5: new FormControl(true),
    6: new FormControl(true),
  });

  constructor(private router: Router, private sharedVariableService: SharedVariableServices ) {
  }

  ngOnInit(): void {
    this.shipments = this.sharedVariableService.shipmentsRecords;
  }

  navigateToShipmentDetail(id: string): void {
    this.router.navigate(["/product-detail", id]);
  }

  reset(popover:any): void {
    this.shipmentStatusForm.patchValue({
      0: true,
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true
    });
    this.shipments = this.sharedVariableService.shipmentsRecords;
    popover.close();
  }

  refreshList(popover:any): void {
    const obj = this.shipmentStatusForm.value;
    const entries = Object.entries(obj);
    const newShipmentStatus: any[] = [];
    entries.forEach(([key, value]) => {
      if (value) {
        newShipmentStatus.push(this.shipmentStatus[key as any])
      }
    });
    this.shipments = this.sharedVariableService.shipmentsRecords.filter((data: ShipmentData) => newShipmentStatus.includes(data.Status));
    popover.close();
  }

}
