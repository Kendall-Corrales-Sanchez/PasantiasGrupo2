import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG v21 imports
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
}

export interface Student {
  id: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TextareaModule,
  ],
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked {

  @ViewChild('messagesContainer') messagesContainer!: ElementRef<HTMLDivElement>;

  // ID del usuario actual
  currentUserId: string = 'user-current';

  // Lista de estudiantes en el sidebar
  students: Student[] = [
    { id: '1', name: 'Estudiante 1', role: 'Puesto aplicado' },
    { id: '2', name: 'Estudiante 2', role: 'Puesto aplicado' },
    { id: '3', name: 'Estudiante 3', role: 'Puesto aplicado' },
    { id: '4', name: 'Estudiante 4', role: 'Puesto aplicado' },
    { id: '5', name: 'Estudiante 5', role: 'Puesto aplicado' },
    { id: '6', name: 'Estudiante 6', role: 'Puesto aplicado' },
  ];

  // Estudiante seleccionado actualmente
  selectedStudent: Student | null = null;

  // Lista de mensajes del chat activo
  messages: ChatMessage[] = [];

  // Texto del nuevo mensaje
  newMessage: string = '';

  // ─────────────────────────────────────────
  // Lifecycle hooks
  // ─────────────────────────────────────────

  ngOnInit(): void {
    this.loadStudents();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }

  // ─────────────────────────────────────────
  // Inicialización
  // ─────────────────────────────────────────

  /** Carga la lista de estudiantes del sidebar */
  private loadStudents(): void {}

  /** Carga los mensajes del estudiante seleccionado */
  private loadMessages(studentId: string): void {}

  /** Limpieza al destruir el componente */
  private onDestroy(): void {}

  // ─────────────────────────────────────────
  // Sidebar
  // ─────────────────────────────────────────

  /** Selecciona un estudiante y carga su conversación */
  onSelectStudent(student: Student): void {}

  /** Función de tracking para el *ngFor del sidebar */
  trackByStudentId(index: number, student: Student): string {
    return student.id;
  }

  // ─────────────────────────────────────────
  // Mensajes
  // ─────────────────────────────────────────

  /** Envía el mensaje actual */
  onSendMessage(): void {}

  /** Maneja el evento keydown en el textarea (Enter para enviar) */
  onKeyDown(event: KeyboardEvent): void {}

  /** Genera un ID único para un nuevo mensaje */
  private generateMessageId(): string {
    return '';
  }

  /** Función de tracking para el *ngFor de mensajes */
  trackByMessageId(index: number, message: ChatMessage): string {
    return message.id;
  }

  // ─────────────────────────────────────────
  // UI
  // ─────────────────────────────────────────

  /** Desplaza el scroll del área de mensajes hacia el final */
  private scrollToBottom(): void {}

}