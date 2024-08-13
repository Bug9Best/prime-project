import { Component } from '@angular/core';
import { PhantomPageService } from '../phantom-page.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'phantom-topbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
  ],
  templateUrl: './phantom-topbar.component.html',
})

export class PhantomTopbarComponent {

  constructor(
    public phantomPageService: PhantomPageService,
  ) {
  }
}
