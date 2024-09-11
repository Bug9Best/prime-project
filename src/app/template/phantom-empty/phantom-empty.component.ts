import { Component, Input } from '@angular/core';

@Component({
  selector: 'phantom-empty',
  templateUrl: './phantom-empty.component.html',
  styleUrl: './phantom-empty.component.scss',
})
export class PhantomEmpty {

  @Input() description: string = 'No data available';
}
