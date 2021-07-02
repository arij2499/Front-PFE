import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDroitsComponent } from './add-droits.component';

describe('AddDroitsComponent', () => {
  let component: AddDroitsComponent;
  let fixture: ComponentFixture<AddDroitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDroitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDroitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
