import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIntershipComponent } from './post-intership.component';

describe('PostIntershipComponent', () => {
  let component: PostIntershipComponent;
  let fixture: ComponentFixture<PostIntershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostIntershipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostIntershipComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
