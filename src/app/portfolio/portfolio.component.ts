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
  projects = [
    {
      name: 'Join',
      imgPath: '/assets/img/portfolio photos s3.png',
      usedTools: ['HTML', 'CSS', 'JS'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      liveLink: 'https://www.google.com/',
      githubLink: 'https://www.google.com/',
    },
    {
      name: 'Sharkie',
      imgPath: '/assets/img/portfolio photos s3.png',
      usedTools: ['HTML', 'CSS', 'JS'],
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      liveLink: 'https://www.google.com/',
      githubLink: 'https://www.google.com/',
    },
    {
      name: 'DaBubble',
      imgPath: '/assets/img/portfolio photos s3.png',
      usedTools: ['HTML', 'CSS', 'JS'],
      description: 'testtd',
      liveLink: 'https://www.google.com/',
      githubLink: 'https://www.google.com/',
    },
  ];
  hoveredProjectIndex: number | null = null;
  onMouseEnter(index: number): void {
    this.hoveredProjectIndex = index;
  }

  onMouseLeave(): void {
    this.hoveredProjectIndex = null;
  }
}
