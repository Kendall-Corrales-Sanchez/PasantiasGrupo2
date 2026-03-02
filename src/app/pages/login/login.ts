import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, DividerModule, InputTextModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true, 
})
export class Login {}
