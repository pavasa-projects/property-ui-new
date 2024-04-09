import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPropertyPhotosComponent } from './post-property-photos.component';

describe('PostPropertyPhotosComponent', () => {
  let component: PostPropertyPhotosComponent;
  let fixture: ComponentFixture<PostPropertyPhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostPropertyPhotosComponent]
    });
    fixture = TestBed.createComponent(PostPropertyPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
