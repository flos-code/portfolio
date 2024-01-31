import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer.component-mediaquery.scss'],
})
export class FooterComponent {
  constructor(
    public translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  letters: string = 'abcdefghijklmnopqrstuvwxyz1234567890<>$%&/()}{!?';
  interval: number | undefined;
  @ViewChild('logo') logoElement!: ElementRef;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
        let logo = this.logoElement.nativeElement;
        logo.onmouseover = (event: MouseEvent) => this.randomizeLetters(event);
      }
    }
  }

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

  getUpdatedText(originalText: string, iteration: number): string {
    return originalText
      .split('')
      .map((char, index) => (index < iteration ? char : this.getRandomLetter()))
      .join('');
  }
}
