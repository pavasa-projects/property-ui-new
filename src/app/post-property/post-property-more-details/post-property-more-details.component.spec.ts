import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPropertyMoreDetailsComponent } from './post-property-more-details.component';

describe('PostPropertyMoreDetailsComponent', () => {
  let component: PostPropertyMoreDetailsComponent;
  let fixture: ComponentFixture<PostPropertyMoreDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostPropertyMoreDetailsComponent]
    });
    fixture = TestBed.createComponent(PostPropertyMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
