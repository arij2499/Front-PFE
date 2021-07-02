import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePtfComponent } from './update-ptf.component';

describe('UpdatePtfComponent', () => {
  let component: UpdatePtfComponent;
  let fixture: ComponentFixture<UpdatePtfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePtfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
