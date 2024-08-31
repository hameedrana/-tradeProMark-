import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPageComponent } from './button-page.component';

describe('ButtonPageComponent', () => {
  let component: ButtonPageComponent;
  let fixture: ComponentFixture<ButtonPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPageComponent]
    });
    fixture = TestBed.createComponent(ButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
