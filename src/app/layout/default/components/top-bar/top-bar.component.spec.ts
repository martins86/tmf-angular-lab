import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarComponent } from './top-bar.component';

describe('Testes do TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve inicializar o TopBarComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Testando o toggleLeftBar', () => {
    it('Deve disparar o emit quando o toggleLeftBar for acionado', () => {
      // Arrange
      spyOn(component.emitToggleLeftBar, 'emit');

      // Act
      component.toggleLeftBar();

      // Assert
      expect(component.emitToggleLeftBar.emit).toHaveBeenCalled();
    });
  });
});
