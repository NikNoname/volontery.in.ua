import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities.component';
import { CitiesRoutingModule } from './cities-routing.module';
import { ItemModule } from '../item/item.module';

@NgModule({
  declarations: [
    CitiesComponent
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    ItemModule
  ]
})
export class CitiesModule { }
