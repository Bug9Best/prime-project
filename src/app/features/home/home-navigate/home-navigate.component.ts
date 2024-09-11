import { Component, inject, output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Overlay } from 'primeng/overlay';

@Component({
  selector: 'home-navigate',
  templateUrl: './home-navigate.component.html',
  styleUrl: './home-navigate.component.scss',
})
export class HomeNavigateComponent {
  languageItems: MenuItem[] | undefined = [];

  listMenu: any[] = [
    { id: 1, label: 'Get Started', element: 'getstarted' },
    { id: 2, label: 'Features', element: 'features' },
    { id: 3, label: 'Developers Team', element: 'team' },
  ];

  onScrollToElementEvent = output<string>();
  onScrollToElement(element: string) {
    this.onScrollToElementEvent.emit(element);
  }

  onSignInEvent = output<boolean>();
  onSignin() {
    this.onSignInEvent.emit(true);
  }

  onSignUpEvent = output<boolean>();
  onSignup() {
    this.onSignUpEvent.emit(true);
  }

  @ViewChild('op', { static: false }) overlay!: Overlay;
  translateService = inject(TranslateService);
  changeLanguage(lang: string) {
    this.translateService.use(lang);
    this.overlay.hide();
  }
}
