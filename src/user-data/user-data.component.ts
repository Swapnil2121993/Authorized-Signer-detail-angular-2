import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],

  inputs:['user_address'],
})
export class UserDataComponent {

  public user_address:string; 
  constructor() { }

  
}
