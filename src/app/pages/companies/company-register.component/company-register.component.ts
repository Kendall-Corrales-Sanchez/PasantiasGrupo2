import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Companies } from '../../../entity/company';
@Component({
  selector: 'app-company-register.component',
  imports: [ButtonModule, StepperModule, InputTextModule, FormsModule],
  templateUrl: './company-register.component.html',
  styleUrl: './company-register.component.css',
})
export class CompanyRegisterComponent{
  company: Companies = {
    id: 0,
    nameCompany: '',
    mail: '',
    password: '',
    province: "",
    WhoAreWe: '',
    sectorType: ''
  };
  
}
