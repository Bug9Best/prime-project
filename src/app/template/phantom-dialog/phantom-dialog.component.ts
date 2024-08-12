import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNGModule } from '../../shared/modules/primeng.module';

@Component({
  selector: 'app-phantom-dialog',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  templateUrl: './phantom-dialog.component.html',
  styleUrl: './phantom-dialog.component.scss'
})
export class PhantomDialogComponent {

}
