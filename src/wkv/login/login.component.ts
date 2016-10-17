import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginResource } from './../shared/resources/login.resource';
import { Login } from './login.interface';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [LoginResource]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginResource: LoginResource) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      alias: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(login: Login) {
    this.loginResource.post(login).then(response => {
      this.router.navigate(['/pages/home']);
    });
  }
}
