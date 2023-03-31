import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingThreadsLayoutComponent } from './following-threads-layout.component';

describe('FollowingThreadsLayoutComponent', () => {
  let component: FollowingThreadsLayoutComponent;
  let fixture: ComponentFixture<FollowingThreadsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowingThreadsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowingThreadsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
