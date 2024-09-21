import { Component } from '@angular/core';
import { ApidataService } from '../Service/apidata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private apidataservice: ApidataService) {
   
  }

}
