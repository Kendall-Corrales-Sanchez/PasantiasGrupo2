import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./pages/footer.component/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PasantiasGrupo2');
}
