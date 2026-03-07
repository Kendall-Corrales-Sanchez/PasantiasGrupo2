// pasantias.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

// PrimeNG v19+ — componentes directos, sin *Module
import { DataView }  from 'primeng/dataview';
import { Select }    from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { Button }    from 'primeng/button';
import { Paginator } from 'primeng/paginator';
import { SelectButton } from 'primeng/selectbutton';

// ─── Interface ───────────────────────────────────────────────────────────────
export interface Pasantia {
  id:           number;
  nombre:       string;
  empresa:      string;
  carrera:      string;
  modalidad:    string;
  ubicacion:    string;
  remuneracion: string;
  imagen?:      string;
}

// ─── Componente ──────────────────────────────────────────────────────────────
@Component({
  selector:   'app-pasantias',
  standalone:  true,
  imports: [
    CommonModule,
    FormsModule,
    DataView,
    Select,
    InputText,
    Button,
    Paginator,
    SelectButton
  ],
  templateUrl: './anuncios.html',
  styleUrls:   ['./anuncios.css']
})
export class Anuncios implements OnInit {

  // ── Opciones dropdowns ────────────────────────────────────────────────────
  modalidadOptions = [
    { label: 'Todas',      value: null         },
    { label: 'Virtual',    value: 'Virtual'    },
    { label: 'Presencial', value: 'Presencial' },
    { label: 'Híbrida',    value: 'Híbrida'    }
  ];

  ubicacionOptions = [
    { label: 'Todas',      value: null         },
    { label: 'San José',   value: 'San José'   },
    { label: 'Alajuela',   value: 'Alajuela'   },
    { label: 'Cartago',    value: 'Cartago'    },
    { label: 'Heredia',    value: 'Heredia'    },
    { label: 'Guanacaste', value: 'Guanacaste' }
  ];

  // ── Estado de filtros ─────────────────────────────────────────────────────
  filters = {
    nombre:       '',
    empresa:      '',
    carrera:      '',
    remuneracion: '',
    modalidad:    null as string | null,
    ubicacion:    null as string | null
  };

  rows = 12;

  // ── Toggle de layout ──────────────────────────────────────────────────────
  layout: 'grid' | 'list' = 'grid';

  layoutOptions = [
    { icon: 'pi pi-table',  value: 'grid' },
    { icon: 'pi pi-list',   value: 'list' }
  ];

  // ── Datos de ejemplo ──────────────────────────────────────────────────────
  pasantias: Pasantia[] = [
    {
      id: 1,
      nombre:       'Ingeniería Software',
      empresa:      'Tech Innovaciones S.A.',
      carrera:      'Software',
      modalidad:    'Virtual',
      ubicacion:    'San José',
      remuneracion: 'Sí',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3papT4SbE649I33q05-RuU9EwL3jvSkWv4Q&s'
    },
    {
      id: 2,
      nombre:       'Ingeniería Software',
      empresa:      'Agro Costa Ltda.',
      carrera:      'Software',
      modalidad:    'Virtual',
      ubicacion:    'Alajuela',
      remuneracion: 'Sí',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3papT4SbE649I33q05-RuU9EwL3jvSkWv4Q&s'
    },
    {
      id: 3,
      nombre:       'Arquitecto de Proyectos',
      empresa:      'Construcciones Pura Vida',
      carrera:      'Ingeniería Civil',
      modalidad:    'Virtual',
      ubicacion:    'Cartago',
      remuneracion: 'Sí',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3papT4SbE649I33q05-RuU9EwL3jvSkWv4Q&s'
    },
    {
      id: 4,
      nombre:       'Enfermero General',
      empresa:      'Salud Integral',
      carrera:      'Medicina',
      modalidad:    'Presencial',
      ubicacion:    'Heredia',
      remuneracion: 'Sí',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3papT4SbE649I33q05-RuU9EwL3jvSkWv4Q&s'
    },
    {
      id: 5,
      nombre:       'Agente de Viajes',
      empresa:      'Viajes y Aventuras',
      carrera:      'Turismo',
      modalidad:    'Virtual',
      ubicacion:    'Guanacaste',
      remuneracion: 'No',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3papT4SbE649I33q05-RuU9EwL3jvSkWv4Q&s'
    },
    {
      id: 6,
      nombre:       'Analista Financiero',
      empresa:      'Finanzas Plus',
      carrera:      'Finanzas',
      modalidad:    'Virtual',
      ubicacion:    'San José',
      remuneracion: 'Sí',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3papT4SbE649I33q05-RuU9EwL3jvSkWv4Q&s'
    }
  ];

  pasantiasFiltradas: Pasantia[] = [];

  // ── Ciclo de vida ─────────────────────────────────────────────────────────
  ngOnInit(): void {
    this.pasantiasFiltradas = [...this.pasantias];
  }

  // ── Métodos (vacíos, listos para implementar) ─────────────────────────────

  /** Se dispara al cambiar cualquier campo del filtro en tiempo real */
  onFilterChange(): void {}

  /** Aplica todos los filtros activos y actualiza pasantiasFiltradas */
  aplicarFiltros(): void {}

  /** Abre el detalle / modal de una pasantía seleccionada */
  verDetalle(pasantia: Pasantia): void {}
}