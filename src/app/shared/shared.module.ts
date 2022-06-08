import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ModalComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModalComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
