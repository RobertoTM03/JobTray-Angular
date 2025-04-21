import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyViewCompanyComponent } from './vacancy-view-company.component';

describe('VacancyViewCompanyComponent', () => {
  let component: VacancyViewCompanyComponent;
  let fixture: ComponentFixture<VacancyViewCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyViewCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyViewCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
