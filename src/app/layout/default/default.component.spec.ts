import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DefaultComponent } from './default.component';

describe('Testes do DefaultComponent', () => {
  let component: DefaultComponent;
  let fixture: ComponentFixture<DefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        DefaultComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve inicializar o DefaultComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Testando o toggleLeftBarOpen', () => {
    it('Deve trocar o valor do leftBarOpen de false para true', () => {
      // Arrange
      component.leftBarOpen = false;

      // Act
      component.toggleLeftBarOpen();

      // Assert
      expect(component.leftBarOpen).toBe(true);
    });

    it('Deve trocar o valor do leftBarOpen de true para false', () => {
      // Arrange
      component.leftBarOpen = true;

      // Act
      component.toggleLeftBarOpen();

      // Assert
      expect(component.leftBarOpen).toBe(false);
    });
  });
});
