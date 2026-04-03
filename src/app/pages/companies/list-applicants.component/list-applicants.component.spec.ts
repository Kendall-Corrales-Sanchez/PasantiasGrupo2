import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApplicantsComponent } from './list-applicants.component';

describe('ListApplicantsComponent', () => {
  let component: ListApplicantsComponent;
  let fixture: ComponentFixture<ListApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListApplicantsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListApplicantsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
