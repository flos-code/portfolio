import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { LanguageService } from './../../../language.service';

import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private languageService: LanguageService,
    public translate: TranslateService
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
    let animationSteps: number = 5; // Assuming you want to show images 1 through 4
    let i: number = 0;
    const interval = setInterval(() => {
      this.currentBurgerIndex = i;
      i++;
      if (i === animationSteps) {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval time (100ms) as needed
  }

  animateBurgerBack(): void {
    let animationSteps: number = 9; // Assuming you want to show images 1 through 4
    let i: number = 5;
    const interval = setInterval(() => {
      this.currentBurgerIndex = i;
      i++;

      if (i === animationSteps) {
        clearInterval(interval);
        this.currentBurgerIndex = 0;
      }
    }, 100); // Adjust the interval time (100ms) as needed
  }

  copyEmailToClipboard(email: string): void {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        this.showCopyMessage = true;
        setTimeout(() => (this.showCopyMessage = false), 3000); // Hide message after 3 seconds
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  }

  ngAfterViewInit(): void {
    const logo = this.logoElement.nativeElement;
    logo.onmouseover = (event: MouseEvent) => this.randomizeLetters(event);
  }

  randomizeLetters(event: MouseEvent): void {
    let iteration = 0;
    if (this.interval !== undefined) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(() => {
      const target = event.target as HTMLElement; // Cast event.target to HTMLElement

      // Check if dataset['value'] is defined
      const datasetValue = target.dataset['value'];
      if (!datasetValue) {
        clearInterval(this.interval);
        this.interval = undefined;
        return;
      }

      target.innerText = target.innerText
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return datasetValue[index];
          }
          return this.letters[Math.floor(Math.random() * this.letters.length)];
        })
        .join('');

      if (iteration >= datasetValue.length) {
        clearInterval(this.interval);
        this.interval = undefined;
      }

      iteration += 1 / 5;
    }, 30) as unknown as number;
  }

  switchLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }
}
