import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';

import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    TopBarComponent,
    LeftBarComponent,
    BottomBarComponent,
    LoadingComponent,
  ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
})
export class DefaultComponent {
  leftBarOpen: boolean = false;

  toggleLeftBarOpen(): void {
    this.leftBarOpen = !this.leftBarOpen;
  }
}
