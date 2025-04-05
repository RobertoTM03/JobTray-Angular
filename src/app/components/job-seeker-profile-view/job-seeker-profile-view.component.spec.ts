import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerProfileViewComponent } from './job-seeker-profile-view.component';

describe('JobTrayProfileViewComponent', () => {
  let component: JobSeekerProfileViewComponent;
  let fixture: ComponentFixture<JobSeekerProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekerProfileViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
