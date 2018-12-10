import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoChildComponent } from './two-child.component';

describe('TwoChildComponent', () => {
  let component: TwoChildComponent;
  let fixture: ComponentFixture<TwoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
