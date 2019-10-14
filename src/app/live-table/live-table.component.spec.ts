import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTableComponent } from './live-table.component';

describe('LiveTableComponent', () => {
  let component: LiveTableComponent;
  let fixture: ComponentFixture<LiveTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
