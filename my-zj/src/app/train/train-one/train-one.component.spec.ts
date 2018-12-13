import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainOneComponent } from './train-one.component';

describe('TrainOneComponent', () => {
  let component: TrainOneComponent;
  let fixture: ComponentFixture<TrainOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
