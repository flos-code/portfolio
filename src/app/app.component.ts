import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MouseTrailComponent } from './mouse-trail/mouse-trail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    AboveTheFoldComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    MouseTrailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
