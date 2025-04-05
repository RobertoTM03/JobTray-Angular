import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerProfileEditComponent } from './job-seeker-profile-edit.component';

describe('JobSeekerProfileEditComponent', () => {
  let component: JobSeekerProfileEditComponent;
  let fixture: ComponentFixture<JobSeekerProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekerProfileEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
