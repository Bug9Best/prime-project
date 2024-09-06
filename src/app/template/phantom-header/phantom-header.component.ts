import { CommonModule } from '@angular/common';
import { Component, input, Input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'phantom-header',
  standalone: true,
  imports: [
    CommonModule,
    DividerModule,
    TranslateModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './phantom-header.component.html',
  styleUrl: './phantom-header.component.scss'
})
export class PhantomHeader {

  title = input<string>('Phantom Header');
  showButton = input<boolean>(true);
  buttonLabel = input<string>('');
  buttonIcon = input<string>('');

  onClickEvent = output();
  onClick() {
    this.onClickEvent.emit();
  }
}
