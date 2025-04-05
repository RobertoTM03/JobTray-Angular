import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyVacancyApplicantsListComponent } from './company-vacancy-applicants-list.component';

describe('CompanyVacancyApplicantsListComponent', () => {
  let component: CompanyVacancyApplicantsListComponent;
  let fixture: ComponentFixture<CompanyVacancyApplicantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyVacancyApplicantsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyVacancyApplicantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
