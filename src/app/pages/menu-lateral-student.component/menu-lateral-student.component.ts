import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-lateral-student.html',
  styleUrl: './menu-lateral-student.css',
})
export class MenuLateral {

  constructor(private router: Router) {}

  cerrarSesion(): void {
    // Aquí coloca tu lógica de cierre de sesión
    // Por ejemplo: this.authService.logout();
    this.router.navigate(['/login']);
  }

}
