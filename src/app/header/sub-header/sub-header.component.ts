import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss'
})
export class SubHeaderComponent {

  @Input() iconValue?: string;
  @Input() userString?: string;

  constructor(private location: Location,private router:Router) {}

  goBack(): void {
    this.location.back();
  }

  navigateToHome(): void {
    this.router.navigateByUrl('/');
  }
}
