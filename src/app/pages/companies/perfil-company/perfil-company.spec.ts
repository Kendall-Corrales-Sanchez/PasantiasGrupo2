import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCompany } from './perfil-company';

describe('PerfilCompany', () => {
  let component: PerfilCompany;
  let fixture: ComponentFixture<PerfilCompany>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilCompany],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilCompany);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
