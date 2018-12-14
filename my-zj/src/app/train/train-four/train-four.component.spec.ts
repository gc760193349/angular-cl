import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainFourComponent } from './train-four.component';

describe('TrainFourComponent', () => {
  let component: TrainFourComponent;
  let fixture: ComponentFixture<TrainFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
