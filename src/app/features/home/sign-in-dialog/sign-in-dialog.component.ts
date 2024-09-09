import { Component, output } from '@angular/core';

@Component({
  selector: 'sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrl: './sign-in-dialog.component.scss'
})
export class SignInDialogComponent {
  visible: boolean = false;

  onSignInEvent = output();
  onSignin() {
    this.onSignInEvent.emit();
  }

  onSignInGoogleEvent = output();
  onSigninGoogle() {
    this.onSignInGoogleEvent.emit();
  }

  onSignUpEvent = output();
  onSignup() {
    this.onSignUpEvent.emit();
  }
}
