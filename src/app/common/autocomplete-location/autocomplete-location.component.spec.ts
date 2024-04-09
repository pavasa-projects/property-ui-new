import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteLocationComponent } from './autocomplete-location.component';

describe('AutocompleteLocationComponent', () => {
  let component: AutocompleteLocationComponent;
  let fixture: ComponentFixture<AutocompleteLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteLocationComponent]
    });
    fixture = TestBed.createComponent(AutocompleteLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
