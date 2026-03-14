import { Component, EventEmitter, Input, model, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ads } from '../../entity/ads';
@Component({
  selector: 'app-drawer',
  imports: [CommonModule, DrawerModule, ButtonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
  standalone: true
})
export class DrawerComponent {
  @Input() pasantia: Ads | null = null;
  @Output() onCerrar = new EventEmitter<void>();
  visible = model(false);

  cerrar() {
    this.visible.set(false);
    this.onCerrar.emit();
  }

  postular() {
    console.log('Postulando a:', this.pasantia);
  }
}
