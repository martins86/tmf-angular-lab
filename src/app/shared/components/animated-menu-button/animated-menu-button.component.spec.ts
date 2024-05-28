import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedMenuButtonComponent } from './animated-menu-button.component';

describe('Testando o AnimatedMenuButtonComponent', () => {
  let component: AnimatedMenuButtonComponent;
  let fixture: ComponentFixture<AnimatedMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedMenuButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimatedMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve inicializar o AnimatedMenuButtonComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Teste do toggleAnimation', () => {
    it('Deve setar false quando o boolean do isAnimated for true', () => {
      // Arrange
      component.isAnimated = true;

      // Act
      component.toggleAnimation();

      // Assert
      expect(component.isAnimated).toBeFalse();
    });

    it('Deve setar true quando o boolean do isAnimated for false', () => {
      // Arrange
      component.isAnimated = false;

      // Act
      component.toggleAnimation();

      // Assert
      expect(component.isAnimated).toBeTrue();
    });
  });
});
