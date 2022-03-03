import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { CaptchaModule } from '../captcha/captcha.module';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    CaptchaModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
