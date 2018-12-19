import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLinksHistoryComponent } from './generate-links-history.component';

describe('GenerateLinksHistoryComponent', () => {
  let component: GenerateLinksHistoryComponent;
  let fixture: ComponentFixture<GenerateLinksHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateLinksHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateLinksHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
