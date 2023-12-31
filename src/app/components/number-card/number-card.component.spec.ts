import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCardComponent } from './number-card.component';

describe('NumberCardComponent', () => {
  let component: NumberCardComponent;
  let fixture: ComponentFixture<NumberCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberCardComponent]
    });
    fixture = TestBed.createComponent(NumberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
