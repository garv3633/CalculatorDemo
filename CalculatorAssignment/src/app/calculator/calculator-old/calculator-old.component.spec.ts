import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorOldComponent } from './calculator-old.component';

describe('CalculatorOldComponent', () => {
  let component: CalculatorOldComponent;
  let fixture: ComponentFixture<CalculatorOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
