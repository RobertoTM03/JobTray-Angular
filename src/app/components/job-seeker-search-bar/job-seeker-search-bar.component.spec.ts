import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerSearchBarComponent } from './job-seeker-search-bar.component';

describe('JobSeekerSearchBarComponent', () => {
  let component: JobSeekerSearchBarComponent;
  let fixture: ComponentFixture<JobSeekerSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekerSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
