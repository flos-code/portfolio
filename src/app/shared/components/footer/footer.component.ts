import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public translate: TranslateService) {}
  letters: string = 'abcdefghijklmnopqrstuvwxyz1234567890<>$%&/()}{!?';
  interval: number | undefined;
  @ViewChild('logo') logoElement!: ElementRef;

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
}
