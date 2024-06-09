import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { HeaderPageComponent } from '@shared/components/header-page/header-page.component';

@Component({
	selector: 'app-not-found',
	standalone: true,
	imports: [MatIconModule, HeaderPageComponent],
	template: `
		<app-header-page
			iconName="sentiment_dissatisfied"
			titlePage="Erro - Conteúdo não Encontrado"
			descriptionPage="Ele pode ter sido removido ou não existe." />

		<div class="message">
			<h3>404</h3>

			<mat-icon aria-hidden="true" fontIcon="sentiment_dissatisfied"></mat-icon>
		</div>
	`,
	styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {}
