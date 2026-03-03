import { Component } from '@angular/core';
import { NavigationService } from '../../genericFuntion';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login{

  constructor(private navigationService: NavigationService){}
  register():void{
    this.navigationService.goTo('role')
  }
  login():void{
    this.navigationService.goTo('registro');
  }

}
