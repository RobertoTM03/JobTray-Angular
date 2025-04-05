import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListingCompanyComponent } from './job-listing-company.component';

describe('JobListingCompanyComponent', () => {
  let component: JobListingCompanyComponent;
  let fixture: ComponentFixture<JobListingCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListingCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListingCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
