import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPageComponent } from './alert-page.component';

describe('AlertPageComponent', () => {
  let component: AlertPageComponent;
  let fixture: ComponentFixture<AlertPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertPageComponent]
    });
    fixture = TestBed.createComponent(AlertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
