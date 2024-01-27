import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [MatIconModule, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  constructor(public translate: TranslateService) {}
}
