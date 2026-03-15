import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../entity/student';

@Component({
  selector: 'app-student-register.component',
  imports: [ButtonModule, StepperModule, InputTextModule, FormsModule],
  templateUrl: './student-register.component.html',
  styleUrl: './student-register.component.css',
})

export class StudentRegisterComponent implements Student{
  name: string = ""
  lastName: string = ""
  mail: string = ""
  password: string = ""
  birthdate: Date = new Date
  province: string = ""
  carrerInterest: string = ""
}
