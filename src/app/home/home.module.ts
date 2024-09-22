import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
const routes: Routes = [
    { path: '', component: HomeComponent },
];
  
@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
    CommonModule,
    TranslateModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
    }),
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }