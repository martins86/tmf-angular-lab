/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class IndexDbService {
	private _indexedDB: IDBFactory;
	private _dbName: string;

	errorMessage = 'IndexedDB error: ';

	constructor() {
		this._indexedDB = window.indexedDB;
		this._dbName = 'db';
	}

	setNameDb(dbName: string): void {
		this._dbName = dbName;
	}

	getNameDB(): string {
		return this._dbName;
	}

	createDB(schema: any[]): Observable<any> {
		return new Observable((observer) => {
			const request = this._indexedDB.open(this._dbName);

			request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
				const db = (event.target as IDBOpenDBRequest).result;

				for (const obj of schema) {
					const store = db.createObjectStore(obj.name, {
						keyPath: 'id',
						autoIncrement: true,
					});

					if (obj.indexes) {
						for (const index of obj.indexes) {
							store.createIndex(`${index}_idx`, index);
						}
					}

					if (obj.seeds) {
						for (const seed of obj.seeds) {
							store.add(seed);
						}
					}
				}

				observer.next('done');
				observer.complete();
			};

			request.onerror = (e: Event) => {
				this.handleError((e.target as any).error);
				observer.error('IndexedDB error');
			};

			request.onsuccess = () => {
				(request.result as IDBDatabase).close();
			};
		});
	}

	post(source: string, object: any): Observable<any> {
		return new Observable((observer) => {
			this.openDB().subscribe((db: IDBDatabase) => {
				const tx = db.transaction(source, 'readwrite');
				const store = tx.objectStore(source);
				const request = store.add(object);

				request.onsuccess = (e: Event) => {
					observer.next((e.target as IDBRequest).result);
					db.close();
					observer.complete();
				};

				request.onerror = (e: Event) => {
					db.close();
					this.handleError('IndexedDB error: ' + (e.target as any).errorCode);
					observer.error('IndexedDB error');
				};
			});
		});
	}

	put(source: string, object: never): Observable<never> {
		return new Observable((observer) => {
			this.openDB().subscribe((db: IDBDatabase) => {
				const tx = db.transaction(source, 'readwrite');
				const store = tx.objectStore(source);
				const request = store.put(object);

				request.onsuccess = () => {
					observer.next(object);
					db.close();
					observer.complete();
				};

				request.onerror = (e: Event) => {
					db.close();
					this.handleError(
						`${this.errorMessage + (e.target as any).errorCode}`,
					);
					observer.error(`${this.errorMessage}`);
				};
			});
		});
	}

	getById(source: string, id: number): Observable<any> {
		return new Observable((observer) => {
			this.openDB().subscribe((db: IDBDatabase) => {
				const tx = db.transaction(source, 'readonly');
				const store = tx.objectStore(source);
				const request = store.get(id);

				request.onsuccess = (e: Event) => {
					observer.next((e.target as IDBRequest).result);
					db.close();
					observer.complete();
				};

				request.onerror = (e: Event) => {
					db.close();
					this.handleError('IndexedDB error: ' + (e.target as any).errorCode);
					observer.error('IndexedDB error');
				};
			});
		});
	}

	getAll(source: string, indexName: string = 'id_idx'): Observable<any[]> {
		return new Observable((observer) => {
			this.openDB().subscribe((db: IDBDatabase) => {
				const tx = db.transaction(source, 'readonly');
				const store = tx.objectStore(source);
				const index = store.index(indexName);
				const request = index.openCursor();
				const results: any[] = [];

				request.onsuccess = (e: Event) => {
					const cursor = (e.target as IDBRequest).result;
					if (cursor) {
						results.push(cursor.value);
						cursor.continue();
					} else {
						observer.next(results);
						db.close();
						observer.complete();
					}
				};

				request.onerror = (e: Event) => {
					db.close();
					this.handleError('IndexedDB error: ' + (e.target as any).errorCode);
					observer.error('IndexedDB error');
				};
			});
		});
	}

	remove(source: string, id: number): Observable<any> {
		return new Observable((observer) => {
			this.openDB().subscribe((db: IDBDatabase) => {
				const tx = db.transaction(source, 'readwrite');
				const store = tx.objectStore(source);
				const request = store.delete(id);

				request.onsuccess = () => {
					observer.next(id);
					db.close();
					observer.complete();
				};

				request.onerror = (e: Event) => {
					db.close();
					this.handleError('IndexedDB error: ' + (e.target as any).errorCode);
					observer.error('IndexedDB error');
				};
			});
		});
	}

	count(source: string, indexName: string = 'id_idx'): Observable<number> {
		return new Observable((observer) => {
			this.openDB().subscribe((db: IDBDatabase) => {
				const tx = db.transaction(source, 'readonly');
				const store = tx.objectStore(source);
				const index = store.index(indexName);
				const request = index.count();

				request.onsuccess = (e: Event) => {
					observer.next((e.target as IDBRequest).result);
					db.close();
					observer.complete();
				};

				request.onerror = (e: Event) => {
					db.close();
					this.handleError('IndexedDB error: ' + (e.target as any).errorCode);
					observer.error('IndexedDB error');
				};
			});
		});
	}

	clear(): Observable<any> {
		return new Observable((observer) => {
			const request = this._indexedDB.deleteDatabase(this._dbName);

			request.onsuccess = () => {
				observer.next('done');
				observer.complete();
			};

			request.onerror = () => {
				this.handleError('Could not delete indexed db.');
				observer.error('IndexedDB error');
			};

			request.onblocked = () => {
				this.handleError(
					'Couldn not delete database due to the operation being blocked.',
				);
				observer.error('IndexedDB error');
			};
		});
	}

	openDB(): Observable<IDBDatabase> {
		return new Observable((observer) => {
			const request = this._indexedDB.open(this._dbName);

			request.onsuccess = () => {
				observer.next(request.result);
				observer.complete();
			};

			request.onerror = () => {
				this.handleError(`${this.errorMessage} ${request.error?.message}`);
				observer.error(`${this.errorMessage}`);
			};
		});
	}

	handleError(msg: string): void {
		throwError(() => new Error(msg));
	}
}
