import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent, SharedModule } from '../shared';



@NgModule({
  declarations: [
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CardListComponent,
    CardComponent
  ]
})
export class CardModule { }
