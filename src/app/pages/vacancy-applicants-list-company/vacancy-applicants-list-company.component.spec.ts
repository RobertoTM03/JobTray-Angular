import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyApplicantsListCompanyComponent } from './vacancy-applicants-list-company.component';

describe('VacancyApplicantsListCompanyComponent', () => {
  let component: VacancyApplicantsListCompanyComponent;
  let fixture: ComponentFixture<VacancyApplicantsListCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyApplicantsListCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyApplicantsListCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
