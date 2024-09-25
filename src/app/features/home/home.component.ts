import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';
import { AuthenService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private router: Router,
    private messageService: MessageService,
    private authenService: AuthenService
  ) { }

  onScrollToElementEvent(element: string) {
    const targetElement = document.getElementById(element);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      key: 'app',
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }

  signInCredential(value: any) {
    this.router.navigate(['/createproject']);
    // this.authenService.SigninCredencial(value)
    //   .subscribe(
    //     {
    //       next: (result) => {
    //         if (result) {
    //           this.signInSuccess(result);
    //         } else {
    //           this.signInFail();
    //         }
    //       },
    //       error: (error) => {
    //         this.signInFail();
    //       }
    //     });
  }

  signInGoogle() {
    window.location.href = 'http://localhost:3000/google';
  }

  onSignUp() {
    this.signUpDialog.visible = false;
    this.showMessage('success', 'Success', 'Sign up successfully');
  }

  signInSuccess(user: any) {
    this.router.navigate(['/project']);
    localStorage.setItem('users', JSON.stringify(user));
    this.showMessage('success', 'Success', 'Sign in successfully');
  }

  signInFail() {
    this.showMessage('error', 'Error', 'Sign in failed');
  }

  @ViewChild(SignInDialogComponent)
  signInDialog!: SignInDialogComponent;
  onOpenSignInEvent() {
    this.signUpDialog.visible = false;
    this.signInDialog.visible = true;
  }

  @ViewChild(SignUpDialogComponent)
  signUpDialog!: SignUpDialogComponent;
  onOpenSignUpEvent() {
    this.signInDialog.visible = false;
    this.signUpDialog.visible = true;
  }
}
