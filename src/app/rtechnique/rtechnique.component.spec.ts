import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtechniqueComponent } from './rtechnique.component';

describe('RtechniqueComponent', () => {
  let component: RtechniqueComponent;
  let fixture: ComponentFixture<RtechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
