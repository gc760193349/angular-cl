import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneChildComponent } from './one-child.component';

describe('OneChildComponent', () => {
  let component: OneChildComponent;
  let fixture: ComponentFixture<OneChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
