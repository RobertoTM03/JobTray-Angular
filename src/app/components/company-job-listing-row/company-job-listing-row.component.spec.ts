import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobListingRowComponent } from './company-job-listing-row.component';

describe('CompanyJobListingRowComponent', () => {
  let component: CompanyJobListingRowComponent;
  let fixture: ComponentFixture<CompanyJobListingRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyJobListingRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyJobListingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
