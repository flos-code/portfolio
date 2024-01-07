import { Component } from '@angular/core';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
