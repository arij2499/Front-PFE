import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCompoenentComponent } from './footer-compoenent.component';

describe('FooterCompoenentComponent', () => {
  let component: FooterCompoenentComponent;
  let fixture: ComponentFixture<FooterCompoenentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCompoenentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCompoenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
