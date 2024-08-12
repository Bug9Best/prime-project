import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from '../../shared/modules/primeng.module';

@Component({
  selector: 'app-phantom-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule
  ],
  templateUrl: './phantom-form.component.html',
  styleUrl: './phantom-form.component.scss'
})
export class PhantomFormComponent {

}
