import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingService } from '@shared/services/loading/loading.service';

@Component({
	selector: 'app-loading',
	standalone: true,
	imports: [CommonModule, MatProgressSpinnerModule],
	template: `
		<ng-container *ngIf="this.loadingService.getSpinner()">
			<div class="loading-content">
				<div class="content-spinner">
					<mat-spinner strokeWidth="10"></mat-spinner>
					<img
						src="./assets/images/logo-angular-mini.svg"
						alt="Carregando..." />
				</div>
			</div>
		</ng-container>
	`,
	styleUrl: './loading.component.scss',
})
export class LoadingComponent {
	loadingService: LoadingService = inject(LoadingService);
}
