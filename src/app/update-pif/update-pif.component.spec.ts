import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePifComponent } from './update-pif.component';

describe('UpdatePifComponent', () => {
  let component: UpdatePifComponent;
  let fixture: ComponentFixture<UpdatePifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
