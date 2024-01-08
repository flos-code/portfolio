import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription, delay } from 'rxjs';

@Component({
  selector: 'app-mouse-trail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mouse-trail.component.html',
  styleUrl: './mouse-trail.component.scss',
})
export class MouseTrailComponent implements OnInit, OnDestroy {
  coordinates: { x: number; y: number } = { x: 0, y: 0 };
  coordinates2: { x: number; y: number } = { x: 0, y: 0 };
  coordinates3: { x: number; y: number } = { x: 0, y: 0 };
  coordinates4: { x: number; y: number } = { x: 0, y: 0 };
  subscription: Subscription = new Subscription();
  subscription2: Subscription = new Subscription();
  subscription3: Subscription = new Subscription();
  subscription4: Subscription = new Subscription();

  constructor() {}

  // ngOnInit() {
  //   this.subscription = fromEvent(document, 'mousemove').subscribe((e: any) => {
  //     this.coordinates = { x: e.clientX, y: e.clientY };
  //     console.log('coordinates: ', this.coordinates);
  //   });
  // }

  ngOnInit() {
    this.subscription = fromEvent(document, 'mousemove')
      .pipe(delay(100)) // Delay for 1 second (1000 milliseconds)
      .subscribe((e: any) => {
        this.coordinates = { x: e.clientX, y: e.clientY };
        console.log('coordinates: ', this.coordinates);
      });

    this.subscription2 = fromEvent(document, 'mousemove')
      .pipe(delay(150))
      .subscribe((e: any) => {
        this.coordinates2 = { x: e.clientX, y: e.clientY };
        console.log('coordinates2: ', this.coordinates2);
      });

    this.subscription3 = fromEvent(document, 'mousemove')
      .pipe(delay(250))
      .subscribe((e: any) => {
        this.coordinates3 = { x: e.clientX, y: e.clientY };
        console.log('coordinates2: ', this.coordinates3);
      });

    this.subscription4 = fromEvent(document, 'mousemove')
      .pipe(delay(350))
      .subscribe((e: any) => {
        this.coordinates4 = { x: e.clientX, y: e.clientY };
        console.log('coordinates2: ', this.coordinates4);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
  }
}