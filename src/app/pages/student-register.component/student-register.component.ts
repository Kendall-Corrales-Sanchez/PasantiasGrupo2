import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Student } from '../../entities/students';

@Component({
  selector: 'app-student-register.component',
  imports: [ButtonModule, StepperModule, InputTextModule, FormsModule],
  templateUrl: './student-register.component.html',
  styleUrl: './student-register.component.css',
})

export class StudentRegisterComponent extends Student{
}
