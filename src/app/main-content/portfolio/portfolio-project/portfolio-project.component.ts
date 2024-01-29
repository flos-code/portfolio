import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  HostListener,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio-project.component.html',
  styleUrls: [
    './portfolio-project.component.scss',
    './portfolio-project.component-mediaquery.scss',
  ],
})
export class PortfolioProjectComponent {
  constructor(public translate: TranslateService) {}
  isSectionOddVisible: boolean = false;
  isSectionEvenVisible: boolean = false;

  @Input() project: any;
  @Input() index: number = 0;
  @Input() totalCount: number = 0;
  @Input() isHovered: boolean = false;

  get hoverStateClass(): string {
    if (this.isHovered) {
      return 'hoverState';
    }
    return 'nonHoverState';
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.checkSectionVisibility();
    this.checkAndApplyHoverEffect();
  }

  checkSectionVisibility() {
    let singleProject = document.querySelector('.project-' + this.index);
    if (singleProject) {
      let rect = singleProject.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.8 && rect.bottom >= 0) {
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
      }, 750);
    }
  }

  isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
}
