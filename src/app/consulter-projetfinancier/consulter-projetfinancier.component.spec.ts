import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterProjetfinancierComponent } from './consulter-projetfinancier.component';

describe('ConsulterProjetfinancierComponent', () => {
  let component: ConsulterProjetfinancierComponent;
  let fixture: ComponentFixture<ConsulterProjetfinancierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterProjetfinancierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterProjetfinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
