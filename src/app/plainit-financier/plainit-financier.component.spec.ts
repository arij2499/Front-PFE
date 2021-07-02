import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainitFinancierComponent } from './plainit-financier.component';

describe('PlainitFinancierComponent', () => {
  let component: PlainitFinancierComponent;
  let fixture: ComponentFixture<PlainitFinancierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainitFinancierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainitFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
