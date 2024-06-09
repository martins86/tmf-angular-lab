import { Component } from '@angular/core';

import { HeaderPageComponent } from '@shared/components/header-page/header-page.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [HeaderPageComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {}
