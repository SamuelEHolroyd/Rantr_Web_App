import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThreadsLayoutComponent } from './my-threads-layout.component';

describe('MyThreadsLayoutComponent', () => {
  let component: MyThreadsLayoutComponent;
  let fixture: ComponentFixture<MyThreadsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyThreadsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyThreadsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
