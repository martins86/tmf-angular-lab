import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingService } from '@shared/services/loading.service';

import { LoadingComponent } from './loading.component';

describe('Testes do LoadingComponent', () => {
	let component: LoadingComponent;
	let fixture: ComponentFixture<LoadingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LoadingComponent],
			providers: [LoadingService],
		}).compileComponents();

		fixture = TestBed.createComponent(LoadingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('Deve inicializar o LoadingComponent', () => {
		expect(component).toBeTruthy();
	});
});
