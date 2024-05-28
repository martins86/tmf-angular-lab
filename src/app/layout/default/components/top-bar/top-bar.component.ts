import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

import { AnimatedMenuButtonComponent } from '@shared/components/animated-menu-button/animated-menu-button.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatToolbarModule, AnimatedMenuButtonComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {}
