import { Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  moduleId:module.id,
  selector:'my-app',
  template: `
  <router-outlet></router-outlet>`,
})

export class AppComponent {
  states: any[];

  constructor(private route:Router) {
   }

   user={};

  
  
  onClick():void {
    this.route.navigate(['detail']);
  }

  
}
