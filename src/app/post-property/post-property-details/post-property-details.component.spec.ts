import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPropertyDetailsComponent } from './post-property-details.component';

describe('PostPropertyDetailsComponent', () => {
  let component: PostPropertyDetailsComponent;
  let fixture: ComponentFixture<PostPropertyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostPropertyDetailsComponent]
    });
    fixture = TestBed.createComponent(PostPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
