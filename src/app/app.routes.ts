// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShipmentDetailsComponent } from './shipment/shipment-details/shipment-details.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shipping', component: ShipmentComponent },
  { path: 'product-detail/:productId', component: ShipmentDetailsComponent}
];
