import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ApiDogService } from '../api-dog.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {

  
  signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    validatePassword: new FormControl('', Validators.required)
  });

  constructor(private route: Router,private api:ApiDogService ) { }

  ngOnInit() {
    // this.loginForm.setValue({ ...this.loginForm.value, email: "cri@hotm.com" });
  }
   private submitData(signUpForm:User){
     if(this.signUpForm.valid){
       this.api.createUser(this.signUpForm.value).subscribe(()=>{
         this.route.navigateByUrl('');
       })
     } else {
       alert("Missing data");
     }

   }
 

}
