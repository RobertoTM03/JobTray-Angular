import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInJobSeekerComponent } from './sign-in-job-seeker.component';

describe('SignInJobSeekerComponent', () => {
  let component: SignInJobSeekerComponent;
  let fixture: ComponentFixture<SignInJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInJobSeekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
