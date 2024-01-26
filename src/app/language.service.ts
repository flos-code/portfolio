import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {}

  setLanguage(language: string): void {
    this.translate.use(language);
    // localStorage.setItem('preferredLanguage', language);
  }

  initializeLanguage(): void {
    // Check if 'preferredLanguage' exists in localStorage
    // const savedLanguage = localStorage.getItem('preferredLanguage');

    // If savedLanguage is not null or undefined, use it; otherwise, default to 'en'
    this.setLanguage('en');
  }
}
