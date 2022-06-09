import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [
    ModalComponent,
    ButtonComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ModalComponent,
    ButtonComponent,
    TableComponent
  ]
})
export class SharedModule { }
