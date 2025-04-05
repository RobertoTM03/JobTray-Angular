import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpJobSeekerComponent } from './sign-up-job-seeker.component';

describe('SignUpJobSeekerComponent', () => {
  let component: SignUpJobSeekerComponent;
  let fixture: ComponentFixture<SignUpJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpJobSeekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
