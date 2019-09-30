import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private route:Router) { }

  ngOnInit() {
    // this.loginForm.setValue({ ...this.loginForm.value, email: "cri@hotm.com" });
  }
  onLogin(){
    if(this.loginForm.valid){
      this.route.navigateByUrl('home');
    }else{
      alert('Wrong credentials!');
    }
  }

}
