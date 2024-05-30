import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarComponent } from './left-bar.component';

describe('Testes do LeftBarComponent', () => {
  let component: LeftBarComponent;
  let fixture: ComponentFixture<LeftBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve inicializar o LeftBarComponent', () => {
    expect(component).toBeTruthy();
  });
});
