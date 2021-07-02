import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterProjetComponent } from './consulter-projet.component';

describe('ConsulterProjetComponent', () => {
  let component: ConsulterProjetComponent;
  let fixture: ComponentFixture<ConsulterProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
