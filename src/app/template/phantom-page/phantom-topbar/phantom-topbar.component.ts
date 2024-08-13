import { Component, inject, ViewChild } from '@angular/core';
import { PhantomPageService } from '../phantom-page.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { Overlay } from 'primeng/overlay';

@Component({
  selector: 'phantom-topbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    OverlayPanelModule,
    ButtonModule
  ],
  templateUrl: './phantom-topbar.component.html'
})

export class PhantomTopbarComponent {
  isLightTheme: boolean = true;

  constructor(
    public phantomPageService: PhantomPageService,
  ) {
  }

  @ViewChild('op', { static: false }) overlay!: Overlay;
  translateService = inject(TranslateService);
  changeLanguage(lang: string) {
    this.translateService.use(lang);
    this.overlay.hide();
  }

  changeTheme(state: boolean) {
    let activeTheme = (state) ? 'lara-dark-blue' : 'lara-light-blue';
    let themeLink = <HTMLLinkElement>document.getElementById('app-theme');
    themeLink.href = `/themes/${activeTheme}/theme.css`;
    this.isLightTheme = !this.isLightTheme;
  }
}
