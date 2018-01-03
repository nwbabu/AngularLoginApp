import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginserviceService} from '../loginservice.service'


@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userservice:LoginserviceService
        ) 
        { 

        }
        Done():void
        {
            alert('Data save Successfully');
        }
    register() {
        this.loading = true;
        console.log(this.model);
        this.userservice.Register(this.model).subscribe(dota=>{this.Done()});
    }
}
