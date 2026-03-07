import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateral } from '../menu-lateral-student/menu-lateral-student';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, MenuLateral],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
