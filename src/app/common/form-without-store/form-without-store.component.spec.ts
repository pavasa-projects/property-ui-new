import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithoutStoreComponent } from './form-without-store.component';

describe('FormWithoutStoreComponent', () => {
  let component: FormWithoutStoreComponent;
  let fixture: ComponentFixture<FormWithoutStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormWithoutStoreComponent]
    });
    fixture = TestBed.createComponent(FormWithoutStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
