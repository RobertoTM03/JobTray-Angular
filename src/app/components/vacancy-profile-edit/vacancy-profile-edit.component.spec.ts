import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyProfileEditComponent } from './vacancy-profile-edit.component';

describe('VacancyProfileEditComponent', () => {
  let component: VacancyProfileEditComponent;
  let fixture: ComponentFixture<VacancyProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyProfileEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
