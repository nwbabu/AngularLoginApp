import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginserviceService} from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = true;
  returnUrl: string;
  IsLogin:string;
  constructor(private route: ActivatedRoute,
    private router: Router,private _loginservice:LoginserviceService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    localStorage.removeItem('currentUser');
  }
  Done():void
  {
    if(this.IsLogin!="")
    {
      alert('logged In Successfully');
    }
      else 
      {
      alert('InVaild user and Password');
      }
  }

login()
{
    this._loginservice.Login(this.model).subscribe(data=>{this.IsLogin=data,
    this.loading=false,
    localStorage.setItem('currentUser',JSON.stringify(data)),
    this.router.navigate(['./home']);
   // this.Done();
  })
}

}
