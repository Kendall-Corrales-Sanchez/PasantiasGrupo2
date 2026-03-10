import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Footer } from "./pages/footer.component/footer.component";
import { MenuLateral } from "./pages/menu-lateral-student.component/menu-lateral-student.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, RouterLinkWithHref, MenuLateral],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PasantiasGrupo2');
}
