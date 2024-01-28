import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  constructor(public translate: TranslateService) {}
  isSectionVisible: boolean = false;

  @ViewChild('skillsContainer', { static: false })
  skillsContainer!: ElementRef;
  @ViewChild('skillsArrow', { static: false })
  skillsArrow!: ElementRef;
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
  ].map((skill) => ({
    ...skill,
    animationDuration: this.getRandomDuration() + 'ms', // Assign random duration here
  }));

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

  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const section = document.querySelector('.skillsContainer'); // Adjust the selector as needed

  //   if (section) {
  //     const sectionTop = section.getBoundingClientRect().top;
  //     const sectionHeight = section.clientHeight;
  //     const windowHeight = window.innerHeight;

  //     if (sectionTop <= windowHeight - sectionHeight / 3) {
  //       this.isSectionVisible = true;
  //     }
  //   }

  //   if (this.aboutContainerBottom) {
  //     const bottomElement = this.aboutContainerBottom.nativeElement;
  //     const rect = bottomElement.getBoundingClientRect();

  //     if (rect.top < window.innerHeight * 0.5 && rect.bottom >= 0) {
  //       // Element is in view
  //       this.hoveredArrow = true;
  //     } else {
  //       // Element is not in view
  //       this.hoveredArrow = false;
  //     }
  //   }
  // }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.skillsContainer) {
      const bottomElement = this.skillsContainer.nativeElement;
      const rect = bottomElement.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.5 && rect.bottom >= 0) {
        this.isSectionVisible = true;
      }
    }

    if (this.skillsArrow) {
      const bottomElement = this.skillsArrow.nativeElement;
      const rect = bottomElement.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.5 && rect.bottom >= 0) {
        // Element is in view
        this.hoveredArrow = true;
      } else {
        // Element is not in view
        this.hoveredArrow = false;
      }
    }
  }

  getRandomDuration() {
    return Math.random() * (750 - 150) + 150; // Random duration between 150ms and 750ms
  }
}
