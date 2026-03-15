import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { NavigationService } from '../../../genericFuntion';
import "primeicons/primeicons.css";

@Component({
  selector: 'app-choose-role.component',
  imports: [CardModule, ButtonModule],
  templateUrl: './choose-role.component.html',
  styleUrl: './choose-role.component.css',
})
export class ChooseRoleComponent {
  selectedRole: string | null = null;

  constructor(private navigationService: NavigationService) { }


  redirrection(ruta: string): void {
    this.navigationService.goTo(ruta);
  }


}
