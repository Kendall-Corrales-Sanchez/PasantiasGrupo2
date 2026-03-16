import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { Companies } from '../../../entity/company';
@Component({
  selector: 'app-perfil-company',
  imports: [CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    CardModule,
    PasswordModule,],
  templateUrl: './perfil-company.html',
  styleUrl: './perfil-company.css',
})
export class PerfilCompanyComponent implements OnInit{
  company: Companies = new Companies();

  provincias: { label: string; value: string }[] = [
    { label: 'San José', value: 'san_jose' },
    { label: 'Alajuela', value: 'alajuela' },
    { label: 'Cartago', value: 'cartago' },
    { label: 'Heredia', value: 'heredia' },
    { label: 'Guanacaste', value: 'guanacaste' },
    { label: 'Puntarenas', value: 'puntarenas' },
    { label: 'Limón', value: 'limon' },
  ];

  sectorOptions: { label: string; value: string }[] = [
    { label: 'Tecnología', value: 'tecnologia' },
    { label: 'Salud', value: 'salud' },
    { label: 'Educación', value: 'educacion' },
    { label: 'Finanzas', value: 'finanzas' },
    { label: 'Construcción', value: 'construccion' },
    { label: 'Comercio', value: 'comercio' },
    { label: 'Manufactura', value: 'manufactura' },
    { label: 'Otro', value: 'otro' },
  ];

  ngOnInit(): void {
    // TODO: Cargar datos de la empresa desde servicio/API
  }

  actualizarPerfil(): void {
    // TODO: Implementar lógica de actualización (ej. llamada a servicio/API)
  }

  volver(): void {
    // TODO: Implementar navegación hacia atrás
  }
}
