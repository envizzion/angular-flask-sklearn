import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPredictionComponent } from './view-prediction.component';

describe('ViewPredictionComponent', () => {
  let component: ViewPredictionComponent;
  let fixture: ComponentFixture<ViewPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
