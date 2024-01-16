import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  inputName: string = '';
  inputEmail: string = '';
  inputMessage: string = '';
  privacyPolicyChecked: boolean = false;

  isNameValid(name: string): boolean {
    // Überprüfe, ob der Name nur Buchstaben und Leerzeichen enthält
    const regex = /^[a-zA-Z\sÖÄÜöäüß]*$/;
    return regex.test(name);
  }

  isEmailValid(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Process your form
    } else {
      // Handle invalid form
    }
  }
}
