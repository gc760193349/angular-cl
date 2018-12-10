import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeChildComponent } from './three-child.component';

describe('ThreeChildComponent', () => {
  let component: ThreeChildComponent;
  let fixture: ComponentFixture<ThreeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
