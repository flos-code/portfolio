import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showMenu: boolean = false;
  showCopyMessage: boolean = false;
  currentBurgerIndex: number = 0;

  menuAnimation: string[] = [
    '/assets/img/burger-animation/burger_01.svg',
    '/assets/img/burger-animation/burger_02.svg',
    '/assets/img/burger-animation/burger_03.svg',
    '/assets/img/burger-animation/burger_04.svg',
    '/assets/img/burger-animation/burger_05.svg',
    '/assets/img/burger-animation/burger_06.svg',
    '/assets/img/burger-animation/burger_07.svg',
    '/assets/img/burger-animation/burger_08.svg',
    '/assets/img/burger-animation/burger_01.svg',
  ];

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    if (this.showMenu) {
      this.animateBurgerToX();
      document.body.style.overflow = 'hidden';
    } else {
      this.animateBurgerBack();
      document.body.style.overflow = '';
    }
  }

  animateBurgerToX(): void {
    const animationSteps = 5; // Assuming you want to show images 1 through 4
    let step = 0;
    const interval = setInterval(() => {
      this.currentBurgerIndex = step;
      step++;
      if (step === animationSteps) {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval time (100ms) as needed
  }

  animateBurgerBack(): void {
    const animationSteps = 9; // Assuming you want to show images 1 through 4
    let step = 5;
    const interval = setInterval(() => {
      this.currentBurgerIndex = step;
      step++;

      if (step === animationSteps) {
        clearInterval(interval);
        this.currentBurgerIndex = 0;
      }
    }, 100); // Adjust the interval time (100ms) as needed
  }

  copyEmailToClipboard(email: string): void {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        this.showCopyMessage = true;
        setTimeout(() => (this.showCopyMessage = false), 3000); // Hide message after 3 seconds
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  }
}
