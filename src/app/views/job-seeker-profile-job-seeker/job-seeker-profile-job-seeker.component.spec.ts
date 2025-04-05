import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerProfileJobSeekerComponent } from './job-seeker-profile-job-seeker.component';

describe('JobSeekerProfileJobSeekerComponent', () => {
  let component: JobSeekerProfileJobSeekerComponent;
  let fixture: ComponentFixture<JobSeekerProfileJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekerProfileJobSeekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerProfileJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
