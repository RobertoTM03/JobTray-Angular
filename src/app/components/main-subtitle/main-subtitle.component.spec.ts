import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSubtitleComponent } from './main-subtitle.component';

describe('MainSubtitleComponent', () => {
  let component: MainSubtitleComponent;
  let fixture: ComponentFixture<MainSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSubtitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
