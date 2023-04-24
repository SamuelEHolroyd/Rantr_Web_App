import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordLayoutComponent } from './change-password-layout.component';

describe('ChangePasswordLayoutComponent', () => {
  let component: ChangePasswordLayoutComponent;
  let fixture: ComponentFixture<ChangePasswordLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
