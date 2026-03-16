import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManuLateralCompanyComponent } from '../manu-lateral-company.component/manu-lateral-company.component';

@Component({
  selector: 'app-layout-company',
  imports: [RouterOutlet, ManuLateralCompanyComponent],
  templateUrl: './layout-company.component.html',
  styleUrl: './layout-company.component.css',
})
export class LayoutCompanyComponent {

}
