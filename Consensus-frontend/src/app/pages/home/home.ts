import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';


@Component({
  selector: 'homepage',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage implements OnInit{
  title = 'app';

  constructor(

   public authService: AuthService,
    public router : Router){

  }

  ngOnInit(): void {
console.log("in ngOnInit in the Home.ts" ,this.authService.authenticated());


  }



}
