import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonalInfoAlterComponent} from './personal-info-alter.component';

describe('PersonalInfoAlterComponent', () => {
  let component: PersonalInfoAlterComponent;
  let fixture: ComponentFixture<PersonalInfoAlterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInfoAlterComponent]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
