import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyVacancyApplicantsRowComponent } from './company-vacancy-applicants-row.component';

describe('CompanyVacancyApplicantsRowComponent', () => {
  let component: CompanyVacancyApplicantsRowComponent;
  let fixture: ComponentFixture<CompanyVacancyApplicantsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyVacancyApplicantsRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyVacancyApplicantsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
