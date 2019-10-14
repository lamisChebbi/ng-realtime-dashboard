import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCashComponent } from './monthly-cash.component';

describe('MonthlyCashComponent', () => {
  let component: MonthlyCashComponent;
  let fixture: ComponentFixture<MonthlyCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
