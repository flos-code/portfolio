import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  setLanguage(language: string): void {
    this.translate.use(language);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('preferredLanguage', language);
    }
  }

  initializeLanguage(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
      this.setLanguage(savedLanguage);
    } else {
      this.setLanguage('en'); // Default language for non-browser platforms
    }
  }
}
