import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderJobSeekerComponent } from './header-job-seeker.component';

describe('HeaderJobSeekerComponent', () => {
  let component: HeaderJobSeekerComponent;
  let fixture: ComponentFixture<HeaderJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderJobSeekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
