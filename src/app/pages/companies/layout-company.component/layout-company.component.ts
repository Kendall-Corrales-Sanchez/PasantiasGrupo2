import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuLateralCompanyComponent } from '../menu-lateral-company.component/menu-lateral-company.component';

@Component({
  selector: 'app-layout-company',
  imports: [RouterOutlet, MenuLateralCompanyComponent],
  templateUrl: './layout-company.component.html',
  styleUrl: './layout-company.component.css',
})
export class LayoutCompanyComponent {
  constructor(private router: Router) {}

  cerrarSesion(): void {
    // Aquí coloca tu lógica de cierre de sesión
    // Por ejemplo: this.authService.logout();
    this.router.navigate(['/login']);
  }

}
