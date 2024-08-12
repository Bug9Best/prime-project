import { Component, inject } from '@angular/core';
import { PhantomPageService } from '../phantom-page.service';

@Component({
  selector: 'phantom-footer',
  standalone: true,
  imports: [],
  templateUrl: './phantom-footer.component.html',
})
export class PhantomFooterComponent {

  layoutService = inject(PhantomPageService);
}
