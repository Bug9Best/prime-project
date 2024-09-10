import { Component, output } from '@angular/core';

@Component({
  selector: 'sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrl: './sign-up-dialog.component.scss'
})
export class SignUpDialogComponent {
  visible: boolean = false;

  onSignUpEvent = output();
  onSignUp() {
    this.onSignUpEvent.emit();
  }

  onSignInGoogleEvent = output();
  onSigninGoogle() {
    this.onSignInGoogleEvent.emit();
  }
}
