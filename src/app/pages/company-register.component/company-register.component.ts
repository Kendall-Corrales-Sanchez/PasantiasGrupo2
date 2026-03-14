import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Companies } from '../../entity/Companies';

@Component({
  selector: 'app-company-register.component',
  imports: [ButtonModule, StepperModule, InputTextModule, FormsModule],
  templateUrl: './company-register.component.html',
  styleUrl: './company-register.component.css',
})
export class CompanyRegisterComponent extends Companies {

  
}
