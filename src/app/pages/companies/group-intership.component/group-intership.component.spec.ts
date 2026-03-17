import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIntershipComponent } from './group-intership.component';

describe('GroupIntershipComponent', () => {
  let component: GroupIntershipComponent;
  let fixture: ComponentFixture<GroupIntershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupIntershipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupIntershipComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
