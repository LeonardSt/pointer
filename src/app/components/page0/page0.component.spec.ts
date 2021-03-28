import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page0Component } from './page0.component';

describe('page0Component', () => {
  let component: Page0Component;
  let fixture: ComponentFixture<Page0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
