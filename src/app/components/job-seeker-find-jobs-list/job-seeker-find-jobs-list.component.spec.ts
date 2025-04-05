import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerFindJobsListComponent } from './job-seeker-find-jobs-list.component';

describe('JobSeekerFindJobsListComponent', () => {
  let component: JobSeekerFindJobsListComponent;
  let fixture: ComponentFixture<JobSeekerFindJobsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekerFindJobsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerFindJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
