import { Component, inject, output } from '@angular/core';
import { FormGroupSignin } from '../../../shared/form/from-signin';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrl: './sign-in-dialog.component.scss'
})
export class SignInDialogComponent {
  visible: boolean = false;

  formGroup: FormGroup = FormGroupSignin;
  messageService = inject(MessageService);

  validateForm() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.showMessage('warn', 'Error', 'Please fill in all required fields');
      return false;
    }
    return true;
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      key: 'app',
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }

  onSignInEvent = output();
  onSignin() {
    let values = this.formGroup.value;
    let state = this.validateForm();
    if (!state) return;
    this.onSignInEvent.emit(values);
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
