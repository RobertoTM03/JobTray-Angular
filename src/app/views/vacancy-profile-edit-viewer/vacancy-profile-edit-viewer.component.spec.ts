import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyProfileEditViewerComponent } from './vacancy-profile-edit-viewer.component';

describe('VacancyProfileEditViewerComponent', () => {
  let component: VacancyProfileEditViewerComponent;
  let fixture: ComponentFixture<VacancyProfileEditViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyProfileEditViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyProfileEditViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
