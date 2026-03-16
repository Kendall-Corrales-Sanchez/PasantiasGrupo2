import { Component, OnInit } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from "primeng/button";
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { DialogModule } from 'primeng/dialog';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { MultiSelect } from 'primeng/multiselect';
import { ProgressBar } from 'primeng/progressbar';
import { Slider } from 'primeng/slider';
export interface Internship {
  id: number;
  nameJob: string;
  company: string;
  carrer: string;
  mode: string;
  ubication: string;
  remuneration: string;
  image?: string;
}

@Component({
  selector: 'app-crud-intership.component',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    TagModule,
    InputTextModule,
    SelectModule,
    DialogModule,
    IconField,
    InputIcon,
  ],
  templateUrl: './crud-intership.component.html',
  styleUrl: './crud-intership.component.css',
})
export class CrudIntershipComponent implements OnInit {

  displayEditDialog: boolean = false;
  editInternship: Internship | null = null;

  internships: Internship[] = [
    {
      id: 1,
      nameJob: 'Frontend Developer Intern',
      company: 'TechCorp S.A.',
      carrer: 'Ingeniería en Sistemas',
      mode: 'Remoto',
      ubication: 'San José, Costa Rica',
      remuneration: '₡250,000',
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 2,
      nameJob: 'Data Analyst Intern',
      company: 'DataHub CR',
      carrer: 'Ingeniería en Informática',
      mode: 'Presencial',
      ubication: 'Heredia, Costa Rica',
      remuneration: '₡200,000',
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png'
    },
    {
      id: 3,
      nameJob: 'UX/UI Design Intern',
      company: 'CreativeStudio',
      carrer: 'Diseño Gráfico',
      mode: 'Híbrido',
      ubication: 'Cartago, Costa Rica',
      remuneration: '₡180,000',
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png'
    },
    {
      id: 4,
      nameJob: 'Backend Developer Intern',
      company: 'Innovasoft',
      carrer: 'Ingeniería en Sistemas',
      mode: 'Remoto',
      ubication: 'Alajuela, Costa Rica',
      remuneration: '₡270,000',
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/bernardodominic.png'
    },
    {
      id: 5,
      nameJob: 'Cybersecurity Intern',
      company: 'SecureNet',
      carrer: 'Ingeniería en Redes',
      mode: 'Presencial',
      ubication: 'San José, Costa Rica',
      remuneration: '₡300,000',
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/elwinsharvill.png'
    }
  ];

  selectedInternships: Internship[] = [];
  loading: boolean = false;
  searchValue: string = '';

  // ─── New Dialog ───────────────────────────────────────────────
  displayNewDialog: boolean = false;
  newInternship: Internship = this.getEmptyInternship();

  // ─── Delete Dialog ────────────────────────────────────────────
  displayDeleteDialog: boolean = false;
  internshipToDelete: Internship | null = null;

  modeOptions: string[] = ['Remoto', 'Presencial', 'Híbrido'];

  ngOnInit(): void {
    // Data already initialized above
  }

  // ─── New Dialog Methods ───────────────────────────────────────

  openNewDialog(): void {
    this.newInternship = this.getEmptyInternship();
    this.displayNewDialog = true;
  }

  closeNewDialog(): void {
    this.displayNewDialog = false;
  }

  saveNewInternship(): void {
    // TODO: Implement save logic (e.g., call to service/API)
    if (this.newInternship.nameJob && this.newInternship.company) {
      this.newInternship.id = this.generateId();
      this.internships = [...this.internships, { ...this.newInternship }];
      this.displayNewDialog = false;
    }
  }

  // ─── Delete Dialog Methods ────────────────────────────────────

  openDeleteDialog(internship: Internship): void {
    this.internshipToDelete = internship;
    this.displayDeleteDialog = true;
  }

  closeDeleteDialog(): void {
    this.displayDeleteDialog = false;
    this.internshipToDelete = null;
  }

  confirmDelete(): void {
    // TODO: Implement delete logic (e.g., call to service/API)
    if (this.internshipToDelete) {
      this.internships = this.internships.filter(i => i.id !== this.internshipToDelete!.id);
      this.displayDeleteDialog = false;
      this.internshipToDelete = null;
    }
  }

  // ─── Postulados (sin acción) ──────────────────────────────────

  onPostulados(internship: Internship): void {
    // Intentionally left empty - no action yet
  }

  // ─── Table Utilities ──────────────────────────────────────────

  clear(dt: Table): void {
    this.searchValue = '';
    dt.reset();
  }

  // ─── Helpers ──────────────────────────────────────────────────

  private getEmptyInternship(): Internship {
    return {
      id: 0,
      nameJob: '',
      company: '',
      carrer: '',
      mode: '',
      ubication: '',
      remuneration: '',
      image: ''
    };
  }

  private generateId(): number {
    return this.internships.length > 0
      ? Math.max(...this.internships.map(i => i.id)) + 1
      : 1;
  }

  getModeSeverity(mode: string): 'success' | 'info' | 'warn' | 'danger' | undefined {
    switch (mode) {
      case 'Remoto':
        return 'success';
      case 'Presencial':
        return 'info';
      case 'Híbrido':
        return 'warn';
      default:
        return undefined;
    }
  }

  openEditDialog(internship: Internship): void {
    this.editInternship = { ...internship };
    this.displayEditDialog = true;
  }

  closeEditDialog(): void {
    this.displayEditDialog = false;
    this.editInternship = null;
  }

  saveEditInternship(): void {
    // TODO: Implementar lógica de actualización (ej. llamada a servicio/API)
    if (this.editInternship && this.editInternship.nameJob && this.editInternship.company) {
      this.internships = this.internships.map(i =>
        i.id === this.editInternship!.id ? { ...this.editInternship! } : i
      );
      this.displayEditDialog = false;
      this.editInternship = null;
    }
  }
}
