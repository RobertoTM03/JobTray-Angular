import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerProfileCompanyComponent } from './job-seeker-profile-company.component';

describe('JobSeekerProfileCompanyComponent', () => {
  let component: JobSeekerProfileCompanyComponent;
  let fixture: ComponentFixture<JobSeekerProfileCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekerProfileCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerProfileCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
