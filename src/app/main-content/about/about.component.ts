import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', './about.component-mediaquery.scss'],
})
export class AboutComponent {
  constructor(public translate: TranslateService) {}
  isSectionVisible: boolean = false;
  hoveredArrow: boolean = false;
  hoveredArrowDelay: boolean = false;
  hoveredProfileImage: boolean = false;

  @ViewChild('aboutContainer', { static: false })
  aboutContainer!: ElementRef;
  @ViewChild('aboutContainerBottom', { static: false })
  aboutContainerBottom!: ElementRef;

  arrowImagesLeft: string[] = [
    '/assets/img/arrow_left_00.png',
    '/assets/img/arrow_left_01.png',
    '/assets/img/arrow_left_02.png',
  ];

  /**
   * slide in animation depending on the scroll position
   * getBoundingClientRect() information about size and position of element in viewport
   */
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.aboutContainer) {
      let bottomElement = this.aboutContainerBottom.nativeElement;
      let rect = bottomElement.getBoundingClientRect();

      if (rect.top < window.innerHeight * 1.5 && rect.bottom >= 0) {
        this.isSectionVisible = true;
      }
    }

    if (this.aboutContainerBottom) {
      let bottomElement = this.aboutContainerBottom.nativeElement;
      let rect = bottomElement.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.5 && rect.bottom >= 0) {
        this.hoveredArrow = true;
      } else {
        this.hoveredArrow = false;
      }
    }
  }

  getImageSrc(): string {
    if (this.hoveredArrow && !this.hoveredArrowDelay) {
      setTimeout(() => {
        this.hoveredArrowDelay = true;
      }, 150);
      return this.arrowImagesLeft[1];
    } else if (this.hoveredArrow && this.hoveredArrowDelay) {
      return this.arrowImagesLeft[2];
    } else {
      return this.arrowImagesLeft[0];
    }
  }

  onMouseEnterProfile(): void {
    this.hoveredProfileImage = true;
  }

  onMouseLeaveProfile(): void {
    this.hoveredProfileImage = false;
  }
}
