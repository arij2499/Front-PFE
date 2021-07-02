import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheProjetfinancierComponent } from './fiche-projetfinancier.component';

describe('FicheProjetfinancierComponent', () => {
  let component: FicheProjetfinancierComponent;
  let fixture: ComponentFixture<FicheProjetfinancierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheProjetfinancierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheProjetfinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
