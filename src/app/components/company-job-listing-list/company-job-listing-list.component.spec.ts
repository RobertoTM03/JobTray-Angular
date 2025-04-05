import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobListingListComponent } from './company-job-listing-list.component';

describe('CompanyJobListingListComponent', () => {
  let component: CompanyJobListingListComponent;
  let fixture: ComponentFixture<CompanyJobListingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyJobListingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyJobListingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
