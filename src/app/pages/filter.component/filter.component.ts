import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

interface SelectOption {
  label: string;
  value: string;
}


@Component({
  selector: 'app-filter',
  imports: [CommonModule,
    FormsModule,
    InputTextModule,
    SelectModule,
    ButtonModule,],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
    nombrePuesto: string = '';
  empresa: string = '';
  carrera: string = '';

  remuneracion: SelectOption | null = null;
  remuneracionOptions: SelectOption[] = [
    { label: 'Todos', value: '' },
    { label: '< $500', value: 'lt500' },
    { label: '$500 - $1000', value: '500_1000' },
    { label: '$1000 - $2000', value: '1000_2000' },
    { label: '> $2000', value: 'gt2000' },
  ];

  modalidad: SelectOption | null = null;
  modalidadOptions: SelectOption[] = [
    { label: 'Todos', value: '' },
    { label: 'Presencial', value: 'presencial' },
    { label: 'Remoto', value: 'remoto' },
    { label: 'Híbrido', value: 'hibrido' },
  ];

  ubicacion: SelectOption | null = null;
  ubicacionOptions: SelectOption[] = [
    { label: 'Todos', value: '' },
    { label: 'San José', value: 'san_jose' },
    { label: 'Alajuela', value: 'alajuela' },
    { label: 'Heredia', value: 'heredia' },
    { label: 'Cartago', value: 'cartago' },
    { label: 'Guanacaste', value: 'guanacaste' },
    { label: 'Puntarenas', value: 'puntarenas' },
    { label: 'Limón', value: 'limon' },
  ];

  onFiltrar(): void {
    const filtros = {
      nombrePuesto: this.nombrePuesto,
      empresa: this.empresa,
      carrera: this.carrera,
      remuneracion: this.remuneracion?.value ?? '',
      modalidad: this.modalidad?.value ?? '',
      ubicacion: this.ubicacion?.value ?? '',
    };
    console.log('Filtros aplicados:', filtros);
    // Aquí emites un EventEmitter o llamas tu servicio
  }
}
