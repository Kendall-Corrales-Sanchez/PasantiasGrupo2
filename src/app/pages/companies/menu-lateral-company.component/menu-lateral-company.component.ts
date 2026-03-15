import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral-company',
  imports: [],
  templateUrl: './menu-lateral-company.component.html',
  styleUrl: './menu-lateral-company.component.css',
})
export class MenuLateralCompanyComponent {
  constructor(private router: Router) {}

  cerrarSesion(): void {
    // Aquí coloca tu lógica de cierre de sesión
    // Por ejemplo: this.authService.logout()
    this.router.navigate(['/login']);
  }
}