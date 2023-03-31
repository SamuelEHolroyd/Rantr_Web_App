import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsLayoutComponent } from './account-details-layout.component';

describe('AccountDetailsLayoutComponent', () => {
  let component: AccountDetailsLayoutComponent;
  let fixture: ComponentFixture<AccountDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
