import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTittleComponent } from './main-tittle.component';

describe('MainTittleComponent', () => {
  let component: MainTittleComponent;
  let fixture: ComponentFixture<MainTittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTittleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
