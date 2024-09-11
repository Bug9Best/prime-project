import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'phantom-footer-home',
  standalone: true,
  imports: [DividerModule, TranslateModule],
  templateUrl: './phantom-footer-home.component.html',
  styleUrl: './phantom-footer-home.component.scss',
})
export class PhantomFooterHomeComponent {
  isFullOptions = input<boolean>(true);
}
