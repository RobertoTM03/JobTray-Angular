import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyViewJobSeekerProfileComponent } from './company-view-job-seeker-profile.component';

describe('CompanyViewJobSeekerProfileComponent', () => {
  let component: CompanyViewJobSeekerProfileComponent;
  let fixture: ComponentFixture<CompanyViewJobSeekerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyViewJobSeekerProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyViewJobSeekerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
