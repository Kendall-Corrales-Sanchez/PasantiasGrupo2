import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Footer } from "./pages/footer/footer";
import { MenuLateral } from "./pages/menu-lateral-student/menu-lateral-student";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, RouterLinkWithHref, MenuLateral],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PasantiasGrupo2');
}
