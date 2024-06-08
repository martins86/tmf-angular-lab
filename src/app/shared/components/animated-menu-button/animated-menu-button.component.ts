import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-animated-menu-button',
	standalone: true,
	imports: [CommonModule],
	template: `
		<button
			[attr.aria-label]="isAnimated ? 'Fechar menu' : 'Abrir menu'"
			type="button"
			class="animated-menu-button"
			(click)="toggleAnimation()"
			[ngClass]="{ active: isAnimated }"
			title="Menu">
			<span></span>
			<span></span>
			<span></span>
		</button>
	`,
	styleUrl: './animated-menu-button.component.scss',
})
export class AnimatedMenuButtonComponent {
	isAnimated = false;

	toggleAnimation() {
		this.isAnimated = !this.isAnimated;
	}
}
