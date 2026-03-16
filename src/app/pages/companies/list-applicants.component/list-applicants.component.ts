import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

export interface Postulante {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  descripcion: string;
  cvUrl?: string;
}
 


@Component({
  selector: 'app-list-applicants.component',
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './list-applicants.component.html',
  styleUrl: './list-applicants.component.css',
})
export class ListApplicantsComponent {
  postulantes: Postulante[] = [
    {
      id: 1,
      nombre: 'Andrés',
      apellido: 'Gutiérrez',
      correo: 'andres.gutierrez@email.com',
      descripcion: 'Interesado en proyectos de infraestructura.',
      cvUrl: 'assets/cv/andres-gutierrez.pdf',
    },
  ];
 
  ngOnInit(): void {}
 
  abrirCV(postulante: Postulante): void {}
 
  iniciarChat(postulante: Postulante): void {}
 
  regresar(): void {}
}
