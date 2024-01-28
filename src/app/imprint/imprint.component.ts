import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [MatIconModule, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrls: [
    './imprint.component.scss',
    './imprint.component-mediaquery.scss',
  ],
})
export class ImprintComponent {
  constructor(public translate: TranslateService) {}
}
