import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyPostCompanyComponent } from './vacancy-post-company.component';

describe('VacancyPostCompanyComponent', () => {
  let component: VacancyPostCompanyComponent;
  let fixture: ComponentFixture<VacancyPostCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyPostCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyPostCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
