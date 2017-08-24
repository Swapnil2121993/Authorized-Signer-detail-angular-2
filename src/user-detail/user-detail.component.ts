import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId:module.id,
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent{

  constructor(private route:Router){

  }

  user={};
 
  onClick():void{
    this.route.navigate(['address']);

  }
  

  

}
