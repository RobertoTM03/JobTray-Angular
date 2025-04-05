import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyProfileViewComponent } from './vacancy-profile-view.component';

describe('VacancyProfileViewComponent', () => {
  let component: VacancyProfileViewComponent;
  let fixture: ComponentFixture<VacancyProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyProfileViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
