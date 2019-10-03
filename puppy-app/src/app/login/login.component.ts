import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit() {
    // this.loginForm.setValue({ ...this.loginForm.value, email: "cri@hotm.com" });
  }
  onLogin() {
    if (this.loginForm.valid) {
      this.route.navigateByUrl('home');
    } else {
      alert('Wrong credentials!');
    }
  }
  onSignUp() {
    this.loginService.login({ username: 'bla', password: '123' }).subscribe((token: string) => {
      localStorage.setItem('auth', token)
      this.route.navigate(['login'])
    })
  }
  redirectSignUp(){
    this.route.navigate(['signUp'])
  }
}
