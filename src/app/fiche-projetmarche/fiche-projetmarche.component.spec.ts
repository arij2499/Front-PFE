import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheProjetmarcheComponent } from './fiche-projetmarche.component';

describe('FicheProjetmarcheComponent', () => {
  let component: FicheProjetmarcheComponent;
  let fixture: ComponentFixture<FicheProjetmarcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheProjetmarcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheProjetmarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
