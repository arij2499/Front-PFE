import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmarchesComponent } from './rmarches.component';

describe('RmarchesComponent', () => {
  let component: RmarchesComponent;
  let fixture: ComponentFixture<RmarchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmarchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmarchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
