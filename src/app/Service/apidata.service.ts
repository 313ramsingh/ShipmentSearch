import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  private url: string = 'assets/shipment.json';

  constructor(private http: HttpClient) {}

  shipmentData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
