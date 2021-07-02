import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantravailFinancierComponent } from './plantravail-financier.component';

describe('PlantravailFinancierComponent', () => {
  let component: PlantravailFinancierComponent;
  let fixture: ComponentFixture<PlantravailFinancierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantravailFinancierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantravailFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
