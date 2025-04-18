import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpCompanyComponent } from './sign-up-company.component';

describe('SignUpCompanyComponent', () => {
  let component: SignUpCompanyComponent;
  let fixture: ComponentFixture<SignUpCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
