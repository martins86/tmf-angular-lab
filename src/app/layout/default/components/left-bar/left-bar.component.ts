import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';

import packages from '../../../../../../package.json';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-left-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './left-bar.component.html',
  styleUrl: './left-bar.component.scss',
})
export class LeftBarComponent {
  versionApp: string = packages.version;
}
