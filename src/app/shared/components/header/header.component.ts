import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { LanguageService } from './../../../language.service';

import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    TranslateModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component-mediaquery.scss'],
})
export class HeaderComponent {
  constructor(
    private languageService: LanguageService,
    public translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  showMenu: boolean = false;
  showCopyMessage: boolean = false;
  currentBurgerIndex: number = 0;

  menuAnimation: string[] = [
    '/assets/img/burger-animation/burger_01.svg',
    '/assets/img/burger-animation/burger_02.svg',
    '/assets/img/burger-animation/burger_03.svg',
    '/assets/img/burger-animation/burger_04.svg',
    '/assets/img/burger-animation/burger_05.svg',
    '/assets/img/burger-animation/burger_06.svg',
    '/assets/img/burger-animation/burger_07.svg',
    '/assets/img/burger-animation/burger_08.svg',
    '/assets/img/burger-animation/burger_01.svg',
  ];

  letters: string = 'abcdefghijklmnopqrstuvwxyz1234567890<>$%&/()}{!?';
  interval: number | undefined;
  @ViewChild('logo') logoElement!: ElementRef;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    if (this.showMenu) {
      this.animateBurgerToX();
      document.body.style.overflow = 'hidden';
    } else {
      this.animateBurgerBack();
      document.body.style.overflow = '';
    }
  }

  animateBurgerToX(): void {
    let animationSteps: number = 5;
    let i: number = 0;
    let interval = setInterval(() => {
      this.currentBurgerIndex = i;
      i++;
      if (i === animationSteps) {
        clearInterval(interval);
      }
    }, 100);
  }

  animateBurgerBack(): void {
    let animationSteps: number = 9;
    let i: number = 5;
    let interval = setInterval(() => {
      this.currentBurgerIndex = i;
      i++;

      if (i === animationSteps) {
        clearInterval(interval);
        this.currentBurgerIndex = 0;
      }
    }, 100);
  }

  copyEmailToClipboard(email: string): void {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        this.showCopyMessage = true;
        setTimeout(() => (this.showCopyMessage = false), 3000);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
        let logo = this.logoElement.nativeElement;
        logo.onmouseover = (event: MouseEvent) => this.randomizeLetters(event);
      }
    }
  }

  /**
   * changes target text random letters one by one until the text goes back to original form
   *
   * @param {MouseEvent} event mouse event that triggers the randomization
   */
  randomizeLetters(event: MouseEvent): void {
    let iteration = 0;
    this.clearExistingInterval();

    this.interval = setInterval(() => {
      let target = event.target as HTMLElement;
      let originalText = target.dataset['value'];
      if (!originalText) {
        this.clearExistingInterval();
        return;
      }

      target.innerText = this.getUpdatedText(originalText, iteration);
      iteration += 1 / 5;

      if (iteration >= originalText.length) {
        this.clearExistingInterval();
      }
    }, 30) as unknown as number;
  }

  clearExistingInterval(): void {
    if (this.interval !== undefined) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  getRandomLetter(): string {
    return this.letters[Math.floor(Math.random() * this.letters.length)];
  }

  /**
   * originalText gelts splitted in an array with each character separately
   * depending on whether the iteration is smaller than the current index in the generated
   * array, the original character or a random character gets saved in the array
   * the array gets converted back to one string
   *
   * @param {string} originalText original text that is being randomized.
   * @param {number} iteration current step in the randomization
   * @returns {string} the string with some random letters which will be displayed
   */
  getUpdatedText(originalText: string, iteration: number): string {
    return originalText
      .split('')
      .map((char, index) => (index < iteration ? char : this.getRandomLetter()))
      .join('');
  }

  switchLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }
}
