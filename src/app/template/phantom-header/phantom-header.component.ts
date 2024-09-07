import { Component, input, Input, output } from '@angular/core';

@Component({
  selector: 'phantom-header',
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
