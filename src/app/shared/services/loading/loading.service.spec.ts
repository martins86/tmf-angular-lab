import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('Testes do LoadingService', () => {
	let service: LoadingService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(LoadingService);
	});

	it('Deve inicializar o LoadingService', () => {
		expect(service).toBeTruthy();
	});

	describe('Testando o setSpinner', () => {
		it('Deve setar o boolean recebido no loading', () => {
			// Arrange
			service['loading'] = true;

			// Act
			service.setSpinner(false);

			// Assert
			expect(service['loading']).toBeFalsy();
		});
	});

	describe('Testando o getSpinner', () => {
		it('Deve retornar o boolean do loading', () => {
			// Arrange
			service['loading'] = true;

			// Act
			const result = service.getSpinner();

			// Assert
			expect(result).toBeTruthy();
		});
	});
});
