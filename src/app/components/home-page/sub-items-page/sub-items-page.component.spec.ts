import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubItemsPageComponent } from './sub-items-page.component';

describe('SubItemsPageComponent', () => {
  let component: SubItemsPageComponent;
  let fixture: ComponentFixture<SubItemsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubItemsPageComponent]
    });
    fixture = TestBed.createComponent(SubItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
