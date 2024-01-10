import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss',
})
export class PortfolioProjectComponent {
  @Input() project: any; // existing input
  @Input() index: number = 0; // new input for the index
  @Input() totalCount: number = 0; // new input for the total count
  @Input() isHovered: boolean = false; // New input for hover state

  get hoverStateClass(): string {
    if (this.isHovered) {
      return 'hoverState'; // Class when hovered
    }
    return 'nonHoverState'; // Class when not hovered
  }
}
