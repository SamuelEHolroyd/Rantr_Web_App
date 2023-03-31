import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedThreadsLayoutComponent } from './recommended-threads-layout.component';

describe('RecommendedThreadsLayoutComponent', () => {
  let component: RecommendedThreadsLayoutComponent;
  let fixture: ComponentFixture<RecommendedThreadsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedThreadsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedThreadsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
