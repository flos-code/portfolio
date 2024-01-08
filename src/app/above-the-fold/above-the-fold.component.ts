import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  arrowImages: string[] = [
    '/assets/img/scroll-arrow-animation/Frame 5700.png',
    '/assets/img/scroll-arrow-animation/Frame 5701.png',
    '/assets/img/scroll-arrow-animation/Frame 5702.png',
    '/assets/img/scroll-arrow-animation/Frame 5703.png',
    '/assets/img/scroll-arrow-animation/Frame 5704.png',
    '/assets/img/scroll-arrow-animation/Frame 5705.png',
    '/assets/img/scroll-arrow-animation/Frame 5706.png',
  ];
  currentImageIndex: number = 0;
  // private timerSubscription: Subscription = new Subscription();

  // ngOnInit(): void {
  //   const intervalTime = 1000; // 1 second interval
  //   const maxIndex = this.arrowImages.length - 1;

  //   this.timerSubscription = interval(intervalTime).subscribe(() => {
  //     this.currentImageIndex = (this.currentImageIndex + 1) % (maxIndex + 1);
  //     console.log(`Current Index: ${this.currentImageIndex}`);
  //   });
  // }

  // ngOnDestroy() {
  //   if (this.timerSubscription) {
  //     this.timerSubscription.unsubscribe();
  //   }
  // }
}
