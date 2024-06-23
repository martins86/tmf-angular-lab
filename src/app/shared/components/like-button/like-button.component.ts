import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-like-button',
	standalone: true,
	imports: [MatIconModule],
	template: `
		<div
			class="like-button-container"
			[attr.data-test]="'like-button-' + idBtn"
			role="button"
			[attr.aria-describedby]="idBtn"
			tabindex="0"
			(click)="like()"
			(keyup.enter)="like()">
			<mat-icon fontIcon="thumb_up" />
			<span
				class="like-counter"
				[attr.id]="idBtn"
				[attr.aria-label]="likes + ': Curtidas'"
				aria-live="assertive"
				aria-atomic="true">
				{{ likes }}
			</span>
		</div>
	`,
	styleUrl: './like-button.component.scss',
})
export class LikeButtonComponent implements OnInit {
	@Input() idBtn: number | undefined;
	likes: number = 0;

	ngOnInit(): void {
		this.idBtn = this.idBtn ?? Math.floor(Math.random() * 200);
	}

	like(): void {
		this.likes++;
	}
}
