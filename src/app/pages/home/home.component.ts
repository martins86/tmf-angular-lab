import { Component } from '@angular/core';

import { BottomBarComponent } from '@layout/default/components/bottom-bar/bottom-bar.component';
import { LeftBarComponent } from '@layout/default/components/left-bar/left-bar.component';
import { LoadingComponent } from '@layout/default/components/loading/loading.component';
import { TopBarComponent } from '@layout/default/components/top-bar/top-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopBarComponent,
    LeftBarComponent,
    BottomBarComponent,
    LoadingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
