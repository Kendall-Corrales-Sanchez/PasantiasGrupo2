import { Component, Input } from '@angular/core';
import { Ads } from '../../entity/ads';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-drawer',
  imports: [CommonModule, DrawerModule, ButtonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
  standalone: true
})
export class DrawerComponent {

  @Input() pasantia: Ads | null = null;

  // visible se maneja internamente — el padre llama a abrir() por @ViewChild
  visible: boolean = false;

  abrir(ads: Ads): void {
    this.pasantia = ads;
    this.visible  = true;
  }

  cerrar(): void {
    this.visible = false;
  }

  postular(): void {
    if (!this.pasantia) return;
    console.log('Postulando a:', this.pasantia.nameJob);
    // TODO: llamar a tu servicio de postulación
  }


}
