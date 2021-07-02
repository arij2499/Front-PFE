import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsComponentComponent } from './chats-component.component';

describe('ChatsComponentComponent', () => {
  let component: ChatsComponentComponent;
  let fixture: ComponentFixture<ChatsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
