import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyAndSafetyComponent } from './privacy-and-safety.component';

describe('PrivacyAndSafetyComponent', () => {
  let component: PrivacyAndSafetyComponent;
  let fixture: ComponentFixture<PrivacyAndSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyAndSafetyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyAndSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
