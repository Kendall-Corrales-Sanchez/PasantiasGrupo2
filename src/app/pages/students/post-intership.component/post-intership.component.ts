import { Component } from '@angular/core';
import { DrawerComponent } from "../drawer.component/drawer.component";
import { CommonModule } from '@angular/common';
import { IntershipComponent } from '../intership.component/intership.component';
import { IntershipDetail } from '../../../entity/internshipDetails';

@Component({
  selector: 'app-post-intership.component',
  imports: [IntershipComponent, DrawerComponent, CommonModule],
  templateUrl: './post-intership.component.html',
  styleUrl: './post-intership.component.css',
})
export class PostIntershipComponent {

  pasantiaSeleccionada: IntershipDetail | null = null;
  drawerVisible = false;

  abrirDrawer(item: IntershipDetail) {
    this.pasantiaSeleccionada = item;
    this.drawerVisible = true;
  }

  resetDrawer() {
  this.drawerVisible = false;
  this.pasantiaSeleccionada = null;
  }

}
