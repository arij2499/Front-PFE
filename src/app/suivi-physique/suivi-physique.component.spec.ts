import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviPhysiqueComponent } from './suivi-physique.component';

describe('SuiviPhysiqueComponent', () => {
  let component: SuiviPhysiqueComponent;
  let fixture: ComponentFixture<SuiviPhysiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviPhysiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
