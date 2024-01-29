import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioProjectComponent, CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: [
    './portfolio.component.scss',
    './portfolio.component-mediaquery.scss',
  ],
})
export class PortfolioComponent {
  constructor(public translate: TranslateService) {}
  hoveredArrow: boolean = false;
  hoveredArrowDelay: boolean = false;

  @ViewChild('projectsArrow', { static: false })
  projectsArrow!: ElementRef;

  arrowImagesLeft: string[] = [
    '/assets/img/arrow_left_00.png',
    '/assets/img/arrow_left_01.png',
    '/assets/img/arrow_left_02.png',
  ];

  projects = [
    {
      name: 'Join',
      imgPath: '/assets/img/project_join.jpg',
      usedTools: ['HTML', 'CSS', 'JS'],
      descriptionKey: 'projectDescriptionJoin',

      liveLink: 'https://www.google.com/',
      githubLink: 'https://github.com/flos-code/Join',
    },
    {
      name: 'Sharkie',
      imgPath: '/assets/img/project_sharkie.jpg',
      usedTools: ['HTML', 'CSS', 'JS'],
      descriptionKey: 'projectDescriptionSharkie',
      liveLink: 'https://www.google.com/',
      githubLink: 'https://github.com/flos-code/Sharkie',
    },
  ];
  hoveredProjectIndex: number | null = null;
  onMouseEnter(index: number): void {
    this.hoveredProjectIndex = index;
  }

  onMouseLeave(): void {
    this.hoveredProjectIndex = null;
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

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.projectsArrow) {
      let bottomElement = this.projectsArrow.nativeElement;
      let rect = bottomElement.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.5 && rect.bottom >= 0) {
        this.hoveredArrow = true;
      } else {
        this.hoveredArrow = false;
      }
    }
  }
}
