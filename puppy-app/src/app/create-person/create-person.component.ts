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
    firstName: new FormControl('cris',Validators.required),
    lastName: new FormControl('hum',Validators.required),
    email: new FormControl('cris@hum.com', [Validators.email, Validators.required]),
    password: new FormControl('123456', Validators.required),
    validatePassword: new FormControl('123456', Validators.required)
  });

  constructor(private route: Router,private api:ApiDogService ) { }

  ngOnInit() {
    // this.loginForm.setValue({ ...this.loginForm.value, email: "cri@hotm.com" });
  }
   private submitData(signUpForm:User){
     if(this.signUpForm.valid){
       console.log(this.signUpForm.value);
       this.api.createUser(signUpForm).subscribe(()=>{
         this.route.navigateByUrl('');
       })
     } else {
       alert("Missing data");
     }

   }
 

}
