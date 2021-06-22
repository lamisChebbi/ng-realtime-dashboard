import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CashInfoComponent } from './cash-info.component';

describe('CashInfoComponent', () => {
  let component: CashInfoComponent;
  let fixture: ComponentFixture<CashInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CashInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
