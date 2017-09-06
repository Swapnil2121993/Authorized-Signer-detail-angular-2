import {Component} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';    

@Component({
    moduleId:module.id,
    templateUrl:'./user-form.component.html',
    
})

export class UserFormComponent{

    constructor(private route:Router){

    }
    user={};

    onClick():void{
        this.route.navigate(['/detail']);
    }

}