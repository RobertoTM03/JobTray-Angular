import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerFindJobsCardComponent } from './job-seeker-find-jobs-card.component';

describe('JobSeekerFindJobsCardComponent', () => {
  let component: JobSeekerFindJobsCardComponent;
  let fixture: ComponentFixture<JobSeekerFindJobsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekerFindJobsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerFindJobsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
