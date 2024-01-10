import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    {
      name: 'HTML',
      imgPath: '/assets/icons/html.svg',
    },
    {
      name: 'CSS',
      imgPath: '/assets/icons/css.svg',
    },
    {
      name: 'JavaScript',
      imgPath: '/assets/icons/Javascript.svg',
    },
    {
      name: 'Git',
      imgPath: '/assets/icons/git.svg',
    },
    {
      name: 'Rest-Api',
      imgPath: '/assets/icons/Api.svg',
    },
    {
      name: 'Scrum',
      imgPath: '/assets/icons/scrum.svg',
    },
    {
      name: 'Typescript',
      imgPath: '/assets/icons/typescript.svg',
    },
    {
      name: 'Material Design',
      imgPath: '/assets/icons/Frame.svg',
    },
    {
      name: 'Angular',
      imgPath: '/assets/icons/Angular.svg',
    },
    {
      name: 'Firebase',
      imgPath: '/assets/icons/Firebase.svg',
    },
  ];

  hoveredArrow: boolean = false;
  hoveredArrowDelay: boolean = false;

  arrowImagesLeft: string[] = [
    '/assets/img/arrow_left_00.png',
    '/assets/img/arrow_left_01.png',
    '/assets/img/arrow_left_02.png',
  ];

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
