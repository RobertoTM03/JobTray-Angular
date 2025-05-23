import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCompanyComponent } from './header-company.component';

describe('HeaderCompanyComponent', () => {
  let component: HeaderCompanyComponent;
  let fixture: ComponentFixture<HeaderCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
