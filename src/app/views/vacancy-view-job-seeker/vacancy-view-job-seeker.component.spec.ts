import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyViewJobSeekerComponent } from './vacancy-view-job-seeker.component';

describe('VacancyViewJobSeekerComponent', () => {
  let component: VacancyViewJobSeekerComponent;
  let fixture: ComponentFixture<VacancyViewJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyViewJobSeekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyViewJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
