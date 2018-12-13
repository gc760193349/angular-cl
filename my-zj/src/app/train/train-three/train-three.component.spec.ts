import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainThreeComponent } from './train-three.component';

describe('TrainThreeComponent', () => {
  let component: TrainThreeComponent;
  let fixture: ComponentFixture<TrainThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
