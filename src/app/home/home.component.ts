import { Component } from '@angular/core';
import { ApidataService } from '../Service/apidata.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedVariableServices } from '../Service/shared.variables.services';
import { ShipmentData } from '../Service/interfaces';
import { ORDER_NO, SHIPMENT_NO } from '../Service/constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private data: ShipmentData[] = [];
  public entryForm = new FormGroup({
    OrderNo: new FormControl(''),
    ShipmentNo: new FormControl(''),
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    DayPhone: new FormControl(''),
    EMailID: new FormControl('')
  });

  constructor(private apidataservice: ApidataService,
    private sharedVariableService: SharedVariableServices,
    private router: Router) {
    this.apidataservice.shipmentData().subscribe((response) => {
      this.data = response?.Shipments?.Shipment;
    });
  }

  reset(): void {
    this.entryForm.reset();
  }

  search(): void {
    const obj = this.entryForm.value;
    const entries = Object.entries(obj);
    entries.forEach(([key, value]) => {
      if (value && value.length > 0) {
        this.filterData(key, value);
      }
    });

    this.sharedVariableService.shipmentsRecords = this.data;

    if (this.data.length === 1) {
      this.router.navigate(["/product-detail", this.data[0].ShipmentNo]);
    } else {
      this.router.navigateByUrl('/shipping');
    }
  }

  filterData(key: string, value: string | null): void {
    this.data = this.data.filter((data: ShipmentData) => {
      if ((key === SHIPMENT_NO || key === ORDER_NO) && data[key]?.toLowerCase().trim() == value?.toLowerCase().trim()) {
        return true;
      }
      else if (data.BillToAddress[key]?.toLowerCase().trim() == value?.toLowerCase().trim()) {
        return true;
      }
      return false;
    });
  }

}
