import { Component, output } from '@angular/core';


@Component({
  selector: 'home-navigate',
  templateUrl: './home-navigate.component.html',
  styleUrl: './home-navigate.component.scss'
})
export class HomeNavigateComponent {
  // languageItems: MenuItem[] | undefined = new ConfigLanguage().ConfigLanguage;


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
}
