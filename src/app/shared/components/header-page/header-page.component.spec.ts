import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPageComponent } from './header-page.component';

describe('Testes do HeaderPageComponent', () => {
	let component: HeaderPageComponent;
	let fixture: ComponentFixture<HeaderPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderPageComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('Deve inicializar o HeaderPageComponent', () => {
		expect(component).toBeTruthy();
	});
});
