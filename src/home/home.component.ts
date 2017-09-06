import { Component} from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import {Router} from '@angular/router';

declare var Auth0Lock;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  lock = new Auth0Lock('PkHnXG1ignsGgw2lzBGQhWVhTWH6Hr2v', 'movieuser.auth0.com');
  jwtHelper: JwtHelper = new JwtHelper();
  isDarkTheme: boolean = false;

  constructor(private router:Router) { }

    login() {
      let self = this;
      this.lock.show((err: string, id_token: string) => {
        if (err) {
          throw new Error(err);
        }

        localStorage.setItem('id_token', id_token);
        console.log(( id_token));
        self.router.navigate(['/form1']);
      })
     
    }
    
  logout() {
    localStorage.removeItem('id_token');

    this.loggedIn();
    this.router.navigate(['/']);
}

loggedIn() {
  return tokenNotExpired();
}
}

