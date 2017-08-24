import { Component} from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']

  
})
export class UserAddressComponent {

  constructor(private route:Router) {}

  onClick():void {
    this.route.navigate(['contact']);
  }
}
