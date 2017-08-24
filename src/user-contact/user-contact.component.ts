import { Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  moduleId:module.id,
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css']
})
export class UserContactComponent{

  constructor(private route:Router) { }

  user={};

  onClick():void{
    console.log(this.user);
    this.route.navigate(['agreement']);
  }

  

}
