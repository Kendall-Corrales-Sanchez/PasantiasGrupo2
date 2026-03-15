import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Student } from '../../../entity/student';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-perfil.component',
 imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, SelectModule, CardModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements Student {

  name: string = ""
  lastName: string = ""
  mail: string = ""
  password: string = ""
  birthdate: Date = new Date
  province: string = ""
  carrerInterest: string = ""

  descripcion: string = ""

  provincias = [
    { label: 'San José', value: 'san_jose' },
    { label: 'Alajuela', value: 'alajuela' },
    { label: 'Cartago', value: 'cartago' },
    { label: 'Heredia', value: 'heredia' },
  ];

  subirCV(): void {}

  guardarCV(): void {}

  actualizarPerfil(): void {}

  volver(): void {}

}
