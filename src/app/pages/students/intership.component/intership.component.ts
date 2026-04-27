import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataView } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { FilterComponent } from '../filter.component/filter.component';
import { IntershipDetail } from '../../../entity/internshipDetails';
import { IntershipService } from '../../../service/intership/intership-service';
import { Intership } from '../../../entity/intership';

@Component({
  selector: 'app-pasantias',
  standalone: true,
  imports: [CommonModule, FormsModule, DataView, TagModule, ButtonModule, FilterComponent],
  templateUrl: './intership.component.html',
  styleUrls: ['./intership.component.css']
})
export class IntershipComponent implements OnInit {

  internship: Intership = { 
  id: 0,
  nameInternship: "",
  description: "",
  funcionality: "",
  remuneration: "",
  requirement: "",
  expirationDate: "",
  day: "",
  starTime: "",
  finishTime: "",
  province_id: 0,
  mode_id: 0,
  company_id:  0
  }

  @Output() verMasClick = new EventEmitter<IntershipDetail>();

  interships = signal<IntershipDetail[]>([]);
  loading = signal<boolean>(true);

  constructor(private intershipService: IntershipService) { }

  ngOnInit() {
    this.intershipService.listInterships().subscribe({
      next: (data) => {
        this.interships.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error cargando pasantías:', err);
        this.loading.set(false);
      }
    });
  }

  createInternship() {
    this
  }

  verMas(item: IntershipDetail) {
    this.verMasClick.emit(item);
  }
}