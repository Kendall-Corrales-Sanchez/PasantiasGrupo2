import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  imports: [],
  templateUrl: './menu-lateral.html',
  styleUrl: './menu-lateral.css',
})
export class MenuLateral {

  constructor(private router: Router) {}

  cerrarSesion(): void {
    // Aquí coloca tu lógica de cierre de sesión
    // Por ejemplo: this.authService.logout();
    this.router.navigate(['/login']);
  }

}
