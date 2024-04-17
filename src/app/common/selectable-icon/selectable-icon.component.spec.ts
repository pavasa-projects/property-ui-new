import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableIconComponent } from './selectable-icon.component';

describe('SelectableIconComponent', () => {
  let component: SelectableIconComponent;
  let fixture: ComponentFixture<SelectableIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectableIconComponent]
    });
    fixture = TestBed.createComponent(SelectableIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
