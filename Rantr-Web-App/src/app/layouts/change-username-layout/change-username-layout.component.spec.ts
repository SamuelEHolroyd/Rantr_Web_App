import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUsernameLayoutComponent } from './change-username-layout.component';

describe('ChangeUsernameLayoutComponent', () => {
  let component: ChangeUsernameLayoutComponent;
  let fixture: ComponentFixture<ChangeUsernameLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeUsernameLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeUsernameLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
