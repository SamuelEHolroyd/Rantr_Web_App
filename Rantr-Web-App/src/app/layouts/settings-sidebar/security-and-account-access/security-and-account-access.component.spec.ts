import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAndAccountAccessComponent } from './security-and-account-access.component';

describe('SecurityAndAccountAccessComponent', () => {
  let component: SecurityAndAccountAccessComponent;
  let fixture: ComponentFixture<SecurityAndAccountAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityAndAccountAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityAndAccountAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
