import { Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-agreement',
  templateUrl: './user-agreement.component.html',
  styleUrls: ['./user-agreement.component.css']
})
export class UserAgreementComponent  {

  constructor(private route:Router) { }

  onClick():void{
    this.route.navigate(['id']);
  }

}
