import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

export interface Notification {
  id: number;
  message: string;
}

@Component({
  selector: 'app-job-tracker',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css'],
})
export class TrackerComponent implements OnInit {

  @ViewChild('notifPanel') notifPanel!: ElementRef<HTMLDivElement>;

  /* ── Pie chart — Aplicado ── */
  aplicadoData: any;

  /* ── Pie chart — Revisado ── */
  revisadoData: any;

  /* ── Shared chart options ── */
  chartOptions: any;

  /* ── Notification list ── */
  notifications: Notification[] = [
    { id: 1, message: 'La compania (Nombre compañia) revisó tu CV' },
    { id: 2, message: 'La compania (Nombre compañia) visitó tu perfil' },
    { id: 3, message: 'La compania (Nombre compañia) revisó tu CV' },
    { id: 4, message: 'La compania (Nombre compañia) visitó tu perfil' },
    { id: 5, message: 'La compania (Nombre compañia) revisó tu CV' },
  ];

  /* ── Scrollbar state ── */
  thumbPosition: number = 0;
  thumbHeight: number = 30;

  private readonly scrollStep = 80;

  ngOnInit(): void {
    this.initChartData();
    this.initChartOptions();
  }

  private initChartData(): void {
    this.aplicadoData = {
      labels: ['Enviados', 'Pendientes', 'Rechazados'],
      datasets: [{ data: [42, 28, 30] }],
    };
    this.revisadoData = {
      labels: ['Revisados', 'En proceso', 'Sin respuesta'],
      datasets: [{ data: [55, 20, 25] }],
    };
  }

  private initChartOptions(): void {
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 12, padding: 10 } },
        tooltip: { enabled: true },
      },
    };
  }

  // ── Scrollbar handlers ──

  onPanelScroll(event: Event): void {
    const el = event.target as HTMLDivElement;
    const scrollable = el.scrollHeight - el.clientHeight;
    if (scrollable <= 0) return;
    this.thumbPosition = (el.scrollTop / scrollable) * (100 - this.thumbHeight);
  }

  scrollUp(): void {
    const el = this.notifPanel?.nativeElement;
    if (el) el.scrollBy({ top: -this.scrollStep, behavior: 'smooth' });
  }

  scrollDown(): void {
    const el = this.notifPanel?.nativeElement;
    if (el) el.scrollBy({ top: this.scrollStep, behavior: 'smooth' });
  }

  // ── Other handlers ──

  onNotificationClick(notification: Notification): void { }

  loadAplicadoData(): void { }

  loadRevisadoData(): void { }

  loadNotifications(): void { }
}