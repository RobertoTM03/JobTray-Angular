import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyVacancyPostComponent } from './company-vacancy-post.component';

describe('CompanyVacancyPostComponent', () => {
  let component: CompanyVacancyPostComponent;
  let fixture: ComponentFixture<CompanyVacancyPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyVacancyPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyVacancyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
