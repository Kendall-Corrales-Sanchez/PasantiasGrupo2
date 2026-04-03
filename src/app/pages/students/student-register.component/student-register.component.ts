import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../entity/student';
import { StudentService } from '../../../service/students/studentService';

@Component({
  selector: 'app-student-register.component',
  imports: [ButtonModule, StepperModule, InputTextModule, FormsModule],
  templateUrl: './student-register.component.html',
  styleUrl: './student-register.component.css',
})

export class StudentRegisterComponent implements Student, OnInit {
  name: string = ""
  lastName: string = ""
  mail: string = ""
  password: string = ""
  birthdate: Date = new Date
  province: string = ""
  carrerInterest: string = ""
  ngOnInit(): void {

  }
  constructor(private student_service : StudentService){

  }
  addUser(){
    let student = new Student(this.name, this.lastName, this.mail, this.password, this.birthdate, this.province, this.carrerInterest);
    console.log(student);
    this.student_service.createStudent(student).subscribe(
      res => console.log(res)
    )
  }
}
