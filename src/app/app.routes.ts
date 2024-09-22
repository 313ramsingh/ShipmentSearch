
import { Routes } from '@angular/router';
import { ShipmentDetailsComponent } from './shipment/shipment-details/shipment-details.component';
import { ShipmentComponent } from './shipment/shipment.component';


export const routes: Routes = [
  { path: '', loadChildren: () => import('../app/home/home.module').then(mod => mod.HomeModule) },
  { path: 'shipping', component: ShipmentComponent },
  { path: 'product-detail/:productId', component: ShipmentDetailsComponent}
];
