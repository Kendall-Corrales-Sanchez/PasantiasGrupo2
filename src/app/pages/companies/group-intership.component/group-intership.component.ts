import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

export interface Puesto {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-group-intership.component',
  imports: [CommonModule, ButtonModule],
  templateUrl: './group-intership.component.html',
  styleUrl: './group-intership.component.css',
})
export class GroupIntershipComponent {

  puestos: Puesto[] = [
    { id: 1, nombre: 'Puesto 1' },
    { id: 2, nombre: 'Puesto 2' },
    { id: 3, nombre: 'Puesto 3' },
    { id: 4, nombre: 'Puesto 4' },
    { id: 5, nombre: 'Puesto 5' },
    { id: 6, nombre: 'Puesto 6' },
    { id: 7, nombre: 'Puesto 7' },
    { id: 8, nombre: 'Puesto 8' },
    { id: 9, nombre: 'Puesto 9' },
  ];
 
  constructor() {}
 
  ngOnInit(): void {}
 
  onVerAplicantes(puesto: Puesto): void {}


}
