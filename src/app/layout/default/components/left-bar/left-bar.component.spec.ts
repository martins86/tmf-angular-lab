import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { LeftBarComponent } from './left-bar.component';

describe('Testes do LeftBarComponent', () => {
  let component: LeftBarComponent;
  let fixture: ComponentFixture<LeftBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), LeftBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve inicializar o LeftBarComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Testando o setNavLinks', () => {
    it('Deve setar o label e link dos itens de navegação', () => {
      // Arrange
      const navItens = [{ label: 'Inicio', link: '/' }];

      // Act
      component.setNavLinks();

      // Assert
      expect(component.navLinks).toEqual(navItens);
    });
  });
});
