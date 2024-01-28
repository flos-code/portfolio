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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const delays = [100, 150, 250, 350]; // Delays for each tail element
      delays.forEach((delayTime, index) => {
        const subscription = fromEvent<MouseEvent>(document, 'mousemove')
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
}
