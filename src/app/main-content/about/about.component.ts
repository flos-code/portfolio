import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(public translate: TranslateService) {}
  isSectionVisible: boolean = false;
  hoveredArrow: boolean = false;
  hoveredArrowDelay: boolean = false;
  hoveredProfileImage: boolean = false;

  arrowImagesLeft: string[] = [
    '/assets/img/arrow_left_00.png',
    '/assets/img/arrow_left_01.png',
    '/assets/img/arrow_left_02.png',
  ];
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const section = document.querySelector('.aboutContainer'); // Adjust the selector as needed

    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.clientHeight;
      const windowHeight = window.innerHeight;

      if (sectionTop <= windowHeight - sectionHeight / 3) {
        this.isSectionVisible = true;
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
