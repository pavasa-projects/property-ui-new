import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyLocationComponent } from './property-location.component';

describe('PropertyLocationComponent', () => {
  let component: PropertyLocationComponent;
  let fixture: ComponentFixture<PropertyLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyLocationComponent]
    });
    fixture = TestBed.createComponent(PropertyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
