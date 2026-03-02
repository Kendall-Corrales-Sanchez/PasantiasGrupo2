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

  login():void{
    this.navigationService.goTo('registro');
  }

}
