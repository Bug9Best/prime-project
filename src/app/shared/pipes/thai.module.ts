import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThaiCardPipe } from './thcard.pipe';
import { ThaiDatePipe } from './thdate.pipe';
import { ThaiBahtPipe } from './thbaht.pipe';

@NgModule({
  declarations: [
    ThaiBahtPipe,
    ThaiCardPipe,
    ThaiDatePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThaiBahtPipe,
    ThaiCardPipe,
    ThaiDatePipe,
  ]
})
export class ThaiModule { }
