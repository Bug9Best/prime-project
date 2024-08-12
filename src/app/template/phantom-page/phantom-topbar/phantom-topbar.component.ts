import { Component, inject } from '@angular/core';
import { PhantomPageService } from '../phantom-page.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

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

  languageItems: MenuItem[] = [
    { label: 'English', command: () => { this.changeLanguage('en'); } },
    { label: 'ภาษาไทย', command: () => { this.changeLanguage('th'); } },
  ];

  constructor(
    public phantomPageService: PhantomPageService,
  ) {
  }

  translateService = inject(TranslateService);
  changeLanguage(lang: string) {
    // this.translateService.use(lang);
  }

}
