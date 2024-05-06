import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPropertyUnitConfigurationComponent } from './post-property-unit-configuration.component';

describe('PostPropertyUnitConfigurationComponent', () => {
  let component: PostPropertyUnitConfigurationComponent;
  let fixture: ComponentFixture<PostPropertyUnitConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostPropertyUnitConfigurationComponent]
    });
    fixture = TestBed.createComponent(PostPropertyUnitConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
