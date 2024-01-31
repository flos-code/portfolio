import { CommonModule } from '@angular/common';
import {
  Component,
  OnDestroy,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { fromEvent, Subscription, delay } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-mouse-trail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mouse-trail.component.html',
  styleUrl: './mouse-trail.component.scss',
})
export class MouseTrailComponent implements OnInit, OnDestroy {
  coordinates = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ];
  subscriptions: Subscription[] = [];
  isMobile: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  /**
   * with a mouse movement event listener the coordinates of the cursor gets tracked
   * the coordinates gets tracked with 4 different delays
   * the mouse trail elements gets placed at this delayed coordinates
   */
  ngOnInit() {
    this.checkIfMobileDevice();
    if (isPlatformBrowser(this.platformId)) {
      let delays = [100, 150, 250, 350];
      delays.forEach((delayTime, index) => {
        let subscription = fromEvent<MouseEvent>(document, 'mousemove')
          .pipe(delay(delayTime))
          .subscribe((e) => {
            this.coordinates[index] = { x: e.clientX, y: e.clientY };
          });
        this.subscriptions.push(subscription);
      });
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  checkIfMobileDevice() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }
  }

  generateClassNames(index: number) {
    let classes = {
      tailDefault: true,
      ['tail' + index]: true, // Dynamically adding a class based on index
      isMobile: this.isMobile,
    };
    return classes;
  }
}
