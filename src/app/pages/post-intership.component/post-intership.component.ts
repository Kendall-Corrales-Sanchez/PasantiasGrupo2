import { Component } from '@angular/core';
import { Intership } from "../intership.component/intership.component";
import { DrawerComponent } from "../drawer.component/drawer.component";
import { Ads } from '../../entity/ads';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-intership.component',
  imports: [Intership, DrawerComponent, CommonModule],
  templateUrl: './post-intership.component.html',
  styleUrl: './post-intership.component.css',
})
export class PostIntershipComponent {

  pasantiaSeleccionada: Ads | null = null;
  drawerVisible = false;

  abrirDrawer(item: Ads) {
    this.pasantiaSeleccionada = item;
    this.drawerVisible = true;
  }

  resetDrawer() {
  this.drawerVisible = false;
  this.pasantiaSeleccionada = null;
  }

}
