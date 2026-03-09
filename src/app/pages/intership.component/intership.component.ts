import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { DataView }  from 'primeng/dataview';
import { Select }    from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { Button }    from 'primeng/button';
import { Paginator } from 'primeng/paginator';
import { SelectButton } from 'primeng/selectbutton';
import { Ads } from '../../entity/ads';
import { DrawerComponent } from '../drawer.component/drawer.component'

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
    SelectButton,
    DrawerComponent
],
  templateUrl: './intership.component.html',
  styleUrls:   ['./intership.component.css']
})
export class Anuncios implements OnInit, Ads{

  id: number = 0
  nameJob: string = ""
  company: string = ""
  carrer: string = ""
  mode: string = ""
  ubication: string = ""
  remuneration: string = ""
  image?: string = ""

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
  ads: Ads[] = [
    {
      id: 1,
      nameJob:       'Ingeniería Software',
      company:      'Tech Innovaciones S.A.',
      carrer:      'Software',
      mode:    'Virtual',
      ubication:    'San José',
      remuneration: 'Sí',
      image: 'https://i.pinimg.com/736x/62/82/35/628235e796d964af0ce2d83cff9c25b5.jpg'
    },
  ];

  pasantiasFiltradas: Ads[] = [];

  // ── Ciclo de vida ─────────────────────────────────────────────────────────
  ngOnInit(): void {
    this.pasantiasFiltradas = [...this.ads];
  }

  // ── Métodos (vacíos, listos para implementar) ─────────────────────────────

  /** Se dispara al cambiar cualquier campo del filtro en tiempo real */
  onFilterChange(): void {}

  /** Aplica todos los filtros activos y actualiza pasantiasFiltradas */
  aplicarFiltros(): void {}

  @ViewChild(DrawerComponent)
  drawerRef!: DrawerComponent;

  verDetalle(ads: Ads): void {
    this.drawerRef.abrir(ads);   // ← abre el drawer y le pasa la pasantía
  }
}