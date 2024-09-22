import { Component } from '@angular/core';

import { HeaderPageComponent } from '@shared/components/header-page/header-page.component';

@Component({
	selector: 'app-font-size',
	standalone: true,
	imports: [HeaderPageComponent],
	templateUrl: './font-size.component.html',
	styleUrl: './font-size.component.scss',
})
export class FontSizeComponent {}
