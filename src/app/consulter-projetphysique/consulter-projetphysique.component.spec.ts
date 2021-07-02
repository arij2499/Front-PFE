import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterProjetphysiqueComponent } from './consulter-projetphysique.component';

describe('ConsulterProjetphysiqueComponent', () => {
  let component: ConsulterProjetphysiqueComponent;
  let fixture: ComponentFixture<ConsulterProjetphysiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterProjetphysiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterProjetphysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
