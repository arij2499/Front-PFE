import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterProjetmarcheComponent } from './consulter-projetmarche.component';

describe('ConsulterProjetmarcheComponent', () => {
  let component: ConsulterProjetmarcheComponent;
  let fixture: ComponentFixture<ConsulterProjetmarcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterProjetmarcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterProjetmarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
