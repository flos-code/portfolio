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
}
