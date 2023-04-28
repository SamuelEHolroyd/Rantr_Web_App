import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadDisplayCardComponent } from './thread-display-card.component';

describe('ThreadDisplayCardComponent', () => {
  let component: ThreadDisplayCardComponent;
  let fixture: ComponentFixture<ThreadDisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadDisplayCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreadDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
