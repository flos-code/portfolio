import { Component } from '@angular/core';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioProjectComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  hoveredArrow: boolean = false;
  hoveredArrowDelay: boolean = false;

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
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      liveLink: 'https://www.google.com/',
      githubLink: 'https://github.com/flos-code/Join',
    },
    {
      name: 'Sharkie',
      imgPath: '/assets/img/project_sharkie.jpg',
      usedTools: ['HTML', 'CSS', 'JS'],
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      liveLink: 'https://www.google.com/',
      githubLink: 'https://github.com/flos-code/Sharkie',
    },
    // {
    //   name: 'DaBubble',
    //   imgPath: '/assets/img/portfolio photos s3.png',
    //   usedTools: ['HTML', 'CSS', 'JS'],
    //   description: 'testtd',
    //   liveLink: 'https://www.google.com/',
    //   githubLink: 'https://www.google.com/',
    // },
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
}
