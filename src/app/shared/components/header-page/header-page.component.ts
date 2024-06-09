import { Component, Input } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-header-page',
	standalone: true,
	imports: [MatIconModule, MatDividerModule],
	template: `
		<div class="header-page">
			<div class="title-page">
				@if (iconName) {
					<mat-icon aria-hidden="true" fontIcon="{{ iconName }}"></mat-icon>
				}
				@if (descriptionPage) {
					<mat-icon
						aria-hidden="true"
						fontIcon="{{ iconChevronRight }}"></mat-icon>
				}
				<h1>{{ titlePage }}</h1>
			</div>
			<mat-divider />
			@if (descriptionPage) {
				<div class="description-page">
					<p>{{ descriptionPage }}</p>
				</div>
			}
		</div>
	`,
	styleUrl: './header-page.component.scss',
})
export class HeaderPageComponent {
	iconChevronRight: string = 'chevron_right';
	@Input() iconName: string = 'pending';
	@Input() titlePage: string = '';
	@Input() descriptionPage: string = '';
}
