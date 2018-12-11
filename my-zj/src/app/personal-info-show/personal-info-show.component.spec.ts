import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoShowComponent } from './personal-info-show.component';

describe('PersonalInfoShowComponent', () => {
  let component: PersonalInfoShowComponent;
  let fixture: ComponentFixture<PersonalInfoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInfoShowComponent]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
