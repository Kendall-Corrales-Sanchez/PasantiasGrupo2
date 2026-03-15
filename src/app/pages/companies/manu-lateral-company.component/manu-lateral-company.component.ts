import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-manu-lateral-company',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './manu-lateral-company.component.html',
  styleUrl: './manu-lateral-company.component.css',
})
export class ManuLateralCompanyComponent {
  constructor(private router: Router) {}

  cerrarSesion(): void {
    // Aquí coloca tu lógica de cierre de sesión
    // Por ejemplo: this.authService.logout();
    this.router.navigate(['/login']);
  }

}
