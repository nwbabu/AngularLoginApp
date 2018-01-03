import { Component, OnInit } from '@angular/core';
import {User} from '../_models/index';
import {LoginserviceService} from '../loginservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  isLoggedIn: boolean = false;
  constructor(private _loginservice:LoginserviceService) { 
    this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.isLoggedIn=true;
  }
 logout()
 {
   localStorage.removeItem('currentUser');
 }
 
}
