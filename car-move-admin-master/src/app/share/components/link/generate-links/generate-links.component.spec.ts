import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLinksComponent } from './generate-links.component';

describe('GenerateLinksComponent', () => {
  let component: GenerateLinksComponent;
  let fixture: ComponentFixture<GenerateLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
