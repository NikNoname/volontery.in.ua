import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { ModalModule } from '../shared/modal/modal.module';

@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [
    ItemComponent
  ],
})
export class ItemModule { }
