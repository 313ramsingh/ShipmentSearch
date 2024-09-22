import { Injectable } from '@angular/core';
import { ShipmentData } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedVariableServices {

  public shipmentsRecords: ShipmentData[] = [];
  constructor() {}
}
