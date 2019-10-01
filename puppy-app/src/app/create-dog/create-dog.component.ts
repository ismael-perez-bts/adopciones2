import {FormGroup, Validators, FormControl } from '@angular/forms'
import {Dog} from '../models/dogs'
import { ApiDogService } from '../api-dog.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.scss']
})
export class CreateDogComponent implements OnInit {
  formDog:FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    sex: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    imgUrl: new FormControl('',Validators.required),
  });
  constructor(private apiDogService:ApiDogService, private route:Router) { }

  ngOnInit() {
  }

  submit():void{
    let form = this.formDog;
    //console.log(form.value)
    if(!form.valid){
      alert('Datos no validos')
      return
    }
    this.submitData(form.value)
    //this.route.navigateByUrl('adoptar');
  }

  private submitData(form:Dog):void{
    this.apiDogService.addDog(form).subscribe(data=>{
      
    })
  }

}
