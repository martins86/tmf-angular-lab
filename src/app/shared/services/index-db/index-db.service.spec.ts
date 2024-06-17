import { TestBed } from '@angular/core/testing';

import { IndexDbService } from './index-db.service';

describe('Testes do IndexDbService', () => {
	let service: IndexDbService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [IndexDbService],
		});
		service = TestBed.inject(IndexDbService);
	});

	it('Deve inicializar o IndexDbService', () => {
		expect(service).toBeTruthy();
	});

	describe('Testando o setNameDb', () => {
		it('Deve setar o _dbName', () => {
			// Arrange
			const dbName = 'blaDb';

			// Act
			service.setNameDb(dbName);

			// Assert
			expect(service.getNameDB()).toEqual(dbName);
		});
	});

	describe('Testando o getNameDB', () => {
		it('Deve retornar o _dbName', () => {
			// Arrange
			const dbName = 'BlaDb';
			service.setNameDb(dbName);

			// Act
			const response = service.getNameDB();

			// Assert
			expect(response).toEqual(dbName);
		});
	});
});
