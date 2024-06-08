import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
	selector: 'app-bottom-bar',
	standalone: true,
	imports: [MatToolbarModule],
	templateUrl: './bottom-bar.component.html',
	styleUrl: './bottom-bar.component.scss',
})
export class BottomBarComponent {
	currentYear: string;
	constructor() {
		this.currentYear = new Date().getFullYear().toString();
	}
}
