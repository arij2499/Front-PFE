import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustementComponent } from './ajustement.component';

describe('AjustementComponent', () => {
  let component: AjustementComponent;
  let fixture: ComponentFixture<AjustementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjustementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
