import { Component, OnInit, signal } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { DataView }  from 'primeng/dataview';
import { Ads } from '../../entity/ads';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector:   'app-pasantias',
  standalone:  true,
  imports: [
    CommonModule,
    FormsModule,
    DataView,
    TagModule,
    ButtonModule,
],
  templateUrl: './intership.component.html',
  styleUrls:   ['./intership.component.css']
})
export class Anuncios implements OnInit{

  id: number = 0
  nameJob: string = ""
  company: string = ""
  carrer: string = ""
  mode: string = ""
  ubication: string = ""
  remuneration: string = ""
  image?: string = ""

  ads = signal<Ads[]>([]);

  ngOnInit() {
    
    this.ads.set([
      {
        id: 1,
        nameJob: 'Desarrollador Frontend',
        company: 'TechCorp',
        carrer: 'Ingeniería de Sistemas',
        mode: 'Remoto',
        ubication: 'Bogotá, Colombia',
        remuneration: '$1,500,000',
        image: 'https://placehold.co/100x100'
      },
      {
        id: 2,
        nameJob: 'Analista de Datos',
        company: 'DataSoft',
        carrer: 'Estadística',
        mode: 'Presencial',
        ubication: 'Medellín, Colombia',
        remuneration: '$1,200,000',
        image: 'https://placehold.co/100x100'
      },
      {
        id: 3,
        nameJob: 'Diseñador UX/UI',
        company: 'CreativeHub',
        carrer: 'Diseño Gráfico',
        mode: 'Híbrido',
        ubication: 'Cali, Colombia',
        remuneration: '$1,800,000',
        image: 'https://placehold.co/100x100'
      },
      {
        id: 4,
        nameJob: 'Backend Developer',
        company: 'CloudSystems',
        carrer: 'Ingeniería de Software',
        mode: 'Remoto',
        ubication: 'Barranquilla, Colombia',
        remuneration: '$2,000,000',
        image: 'https://placehold.co/100x100'
      },
      {
        id: 5,
        nameJob: 'QA Tester',
        company: 'QualityApps',
        carrer: 'Ingeniería de Sistemas',
        mode: 'Presencial',
        ubication: 'Bucaramanga, Colombia',
        remuneration: '$1,100,000',
        image: 'https://placehold.co/100x100'
      }
    ]);
  }
}