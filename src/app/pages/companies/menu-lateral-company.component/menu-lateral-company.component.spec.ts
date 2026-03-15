import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralCompanyComponent } from './menu-lateral-company.component';

describe('MenuLateralCompanyComponent', () => {
  let component: MenuLateralCompanyComponent;
  let fixture: ComponentFixture<MenuLateralCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLateralCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuLateralCompanyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
