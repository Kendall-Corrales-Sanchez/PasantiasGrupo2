import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataView } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { FilterComponent } from '../filter.component/filter.component';
import { IntershipDetail } from '../../../entity/internshipDetails';
import { IntershipService } from '../../../service/intership/intership-service';

@Component({
  selector: 'app-pasantias',
  standalone: true,
  imports: [CommonModule, FormsModule, DataView, TagModule, ButtonModule, FilterComponent],
  templateUrl: './intership.component.html',
  styleUrls: ['./intership.component.css']
})
export class IntershipComponent implements OnInit {

  @Output() verMasClick = new EventEmitter<IntershipDetail>();

  interships = signal<IntershipDetail[]>([]);
  loading = signal<boolean>(true);

  constructor(private intershipService: IntershipService) {}

  ngOnInit() {
    this.intershipService.getAllInterships().subscribe({
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

  verMas(item: IntershipDetail) {
    this.verMasClick.emit(item);
  }
}