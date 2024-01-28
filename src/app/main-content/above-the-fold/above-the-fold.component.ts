import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrls: [
    './above-the-fold.component.scss',
    './above-the-fold.component-mediaquery.scss',
  ],
})
export class AboveTheFoldComponent {
  constructor(public translate: TranslateService) {}
}
