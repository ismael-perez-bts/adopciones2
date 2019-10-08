import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dog } from '../models/dogs';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiDogService } from '../api-dog.service';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.scss']
})
export class PerroComponent implements OnInit {

 

  @Input() dog:Dog;
  // const edad:boolean;
  constructor(private dogservice: ApiDogService) { }

  ngOnInit() {
  }
  
  @Output() propagar = new EventEmitter();

  eliminar(dog:Dog):void{
    this.dogservice.deleteDogs(dog).subscribe((obj:object)=>{
      this.propagar.emit('algodon');
    });
   
  }

  ngYears(year:number):string{
    if(year > 1){
      return year + " años"
    }else{
      return year + " año";
    }
  }
}
