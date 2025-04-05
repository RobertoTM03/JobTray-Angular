import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyVacancyToggleNavComponent } from './company-vacancy-toggle-nav.component';

describe('CompanyVacancyToggleNavComponent', () => {
  let component: CompanyVacancyToggleNavComponent;
  let fixture: ComponentFixture<CompanyVacancyToggleNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyVacancyToggleNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyVacancyToggleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
