import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThreadsLayoutComponent } from './create-threads-layout.component';

describe('CreateThreadsLayoutComponent', () => {
  let component: CreateThreadsLayoutComponent;
  let fixture: ComponentFixture<CreateThreadsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThreadsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateThreadsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
