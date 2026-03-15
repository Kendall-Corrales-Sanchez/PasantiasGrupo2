import { Component } from '@angular/core';
import { DrawerComponent } from "../drawer.component/drawer.component";
import { Intership } from '../../../entity/intership';
import { CommonModule } from '@angular/common';
import { IntershipComponent } from '../intership.component/intership.component';

@Component({
  selector: 'app-post-intership.component',
  imports: [IntershipComponent, DrawerComponent, CommonModule],
  templateUrl: './post-intership.component.html',
  styleUrl: './post-intership.component.css',
})
export class PostIntershipComponent {

  pasantiaSeleccionada: Intership | null = null;
  drawerVisible = false;

  abrirDrawer(item: Intership) {
    this.pasantiaSeleccionada = item;
    this.drawerVisible = true;
  }

  resetDrawer() {
  this.drawerVisible = false;
  this.pasantiaSeleccionada = null;
  }

}
