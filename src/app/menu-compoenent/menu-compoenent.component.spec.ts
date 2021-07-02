import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCompoenentComponent } from './menu-compoenent.component';

describe('MenuCompoenentComponent', () => {
  let component: MenuCompoenentComponent;
  let fixture: ComponentFixture<MenuCompoenentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCompoenentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCompoenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
