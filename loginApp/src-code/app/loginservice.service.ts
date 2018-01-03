import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Input } from '@angular/core/src/metadata/directives';
import { User } from './_models/index';
@Injectable()
export class LoginserviceService {
  private _baseurl='http://localhost:62622/api/user/';

  constructor(private _http:Http) { }

  Register(model:User)
  {
    var body=JSON.stringify(model);
		var ho=new Headers({'Content-Type':'application/json'});
		var ro=new RequestOptions({method:RequestMethod.Post,headers:ho});
    return this._http.post( this._baseurl+'Registeruser',body,ro)
    .map(x=>x.json());
  }
  Login(model:User)
  {
    var body=JSON.stringify(model);
		var ho=new Headers({'Content-Type':'application/json'});
    var ro=new RequestOptions({method:RequestMethod.Post,headers:ho});
    return this._http.post( this._baseurl+'VaildateUser',body,ro)
    .map(x=>x.json());
    
  }
  
}
