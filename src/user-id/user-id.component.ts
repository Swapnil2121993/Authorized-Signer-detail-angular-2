import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent {

  constructor(private route:Router) { }
  user={};

  

  onClick():void{
    this.route.navigate(['']);

  }
}
