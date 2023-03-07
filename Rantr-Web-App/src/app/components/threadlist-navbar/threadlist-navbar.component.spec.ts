import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadlistNavbarComponent } from './threadlist-navbar.component';

describe('ThreadlistNavbarComponent', () => {
  let component: ThreadlistNavbarComponent;
  let fixture: ComponentFixture<ThreadlistNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadlistNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreadlistNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
