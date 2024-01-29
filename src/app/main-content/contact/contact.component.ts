import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    TranslateModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.scss',
    './contact.component-mediaquery.scss',
  ],
})
export class ContactComponent {
  constructor(public translate: TranslateService) {}
  @ViewChild('contactForm') contactForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  inputName: string = '';
  inputEmail: string = '';
  inputMessage: string = '';
  privacyPolicyChecked: boolean = false;
  messageSend: boolean = false;

  isNameValid(name: string): boolean {
    const regex = /^[a-zA-Z\sÖÄÜöäüß]*$/;
    return regex.test(name);
  }

  isEmailValid(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }

  async sendMail() {
    this.setFormFieldsDisabled(true);
    let formData = new FormData();
    formData.append('name', this.nameField.nativeElement.value);
    formData.append('email', this.emailField.nativeElement.value);
    formData.append('message', this.messageField.nativeElement.value);
    formData.append('preferredLanguage', this.getPreferredLanguage());
    try {
      await fetch('https://scholz-florian.com/send_mail/send_mail.php', {
        method: 'POST',
        body: formData,
      });
      this.showSubmitFeedback();
      this.resetFormFields();
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      this.setFormFieldsDisabled(false);
    }
  }

  setFormFieldsDisabled(disabled: boolean) {
    this.nameField.nativeElement.disabled = disabled;
    this.emailField.nativeElement.disabled = disabled;
    this.messageField.nativeElement.disabled = disabled;
    this.sendButton.nativeElement.disabled = disabled;
  }

  resetFormFields() {
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
    this.privacyPolicyChecked = false;
  }

  showSubmitFeedback() {
    this.messageSend = true;

    setTimeout(() => {
      this.messageSend = false;
    }, 5000);
  }

  getPreferredLanguage(): string {
    return localStorage.getItem('preferredLanguage') || 'en';
  }
}
