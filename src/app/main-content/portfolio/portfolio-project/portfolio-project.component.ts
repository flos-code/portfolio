import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss',
})
export class PortfolioProjectComponent {
  isSectionOddVisible: boolean = false;
  isSectionEvenVisible: boolean = false;
  @Input() project: any; // existing input
  @Input() index: number = 0; // new input for the index
  @Input() totalCount: number = 0; // new input for the total count
  @Input() isHovered: boolean = false; // New input for hover state

  get hoverStateClass(): string {
    if (this.isHovered) {
      return 'hoverState'; // Class when hovered
    }
    return 'nonHoverState'; // Class when not hovered
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.checkSectionVisibility();
    this.checkAndApplyHoverEffect();
  }

  checkSectionVisibility() {
    const section = document.querySelector('.project-' + this.index);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.clientHeight;
      const windowHeight = window.innerHeight;

      if (sectionTop <= windowHeight - sectionHeight / 3) {
        if ((this.index + 1) % 2 == 1) {
          this.isSectionOddVisible = true;
        } else {
          this.isSectionEvenVisible = true;
        }
      }
    }
  }

  checkAndApplyHoverEffect() {
    if (
      this.isTouchDevice() &&
      (this.isSectionOddVisible || this.isSectionEvenVisible)
    ) {
      setTimeout(() => {
        this.isHovered = true;
      }, 750); // Adjust the time based on your animation duration
    }
  }

  isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
}
