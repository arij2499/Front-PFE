import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPassationComponent } from './plan-passation.component';

describe('PlanPassationComponent', () => {
  let component: PlanPassationComponent;
  let fixture: ComponentFixture<PlanPassationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanPassationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPassationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
