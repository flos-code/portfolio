import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {}

  setLanguage(language: string): void {
    this.translate.use(language);
  }

  initializeLanguage(): void {
    this.setLanguage('en');
  }
}
