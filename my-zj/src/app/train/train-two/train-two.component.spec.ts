import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainTwoComponent } from './train-two.component';

describe('TrainTwoComponent', () => {
  let component: TrainTwoComponent;
  let fixture: ComponentFixture<TrainTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
