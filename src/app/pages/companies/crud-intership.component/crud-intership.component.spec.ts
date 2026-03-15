import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudIntershipComponent } from './crud-intership.component';

describe('CrudIntershipComponent', () => {
  let component: CrudIntershipComponent;
  let fixture: ComponentFixture<CrudIntershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudIntershipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudIntershipComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
