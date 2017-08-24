import {Component} from '@angular/core';
import {Router} from '@angular/router';

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