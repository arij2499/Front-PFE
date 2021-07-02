import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDroitsComponent } from './update-droits.component';

describe('UpdateDroitsComponent', () => {
  let component: UpdateDroitsComponent;
  let fixture: ComponentFixture<UpdateDroitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDroitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDroitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
