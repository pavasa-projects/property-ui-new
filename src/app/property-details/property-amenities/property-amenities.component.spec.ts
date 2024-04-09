import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAmenitiesComponent } from './property-amenities.component';

describe('PropertyAmenitiesComponent', () => {
  let component: PropertyAmenitiesComponent;
  let fixture: ComponentFixture<PropertyAmenitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyAmenitiesComponent]
    });
    fixture = TestBed.createComponent(PropertyAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
