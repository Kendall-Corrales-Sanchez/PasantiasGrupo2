import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateral } from '../menu-lateral-student.component/menu-lateral-student.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, MenuLateral],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class Layout {}
