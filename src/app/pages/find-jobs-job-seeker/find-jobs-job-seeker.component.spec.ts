import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobsJobSeekerComponent } from './find-jobs-job-seeker.component';

describe('FindJobsJobSeekerComponent', () => {
  let component: FindJobsJobSeekerComponent;
  let fixture: ComponentFixture<FindJobsJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindJobsJobSeekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindJobsJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
