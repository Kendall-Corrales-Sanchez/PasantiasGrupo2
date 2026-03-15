import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuLateralCompanyComponent } from './manu-lateral-company.component';

describe('ManuLateralCompanyComponent', () => {
  let component: ManuLateralCompanyComponent;
  let fixture: ComponentFixture<ManuLateralCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManuLateralCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManuLateralCompanyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
