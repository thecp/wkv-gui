import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Login } from './../../login/login.interface';
import { Resource } from './resource.service';

@Injectable()
export class LoginResource extends Resource {

  constructor (http: Http) {
    super('login', http);
  }

  post(login: Login): Promise<any> {
    return this.http.post(this.url, login).toPromise();
  }
}
