import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../models/dogs';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.scss']
})
export class PerroComponent implements OnInit {

  @Input() dog:Dog;
  // const edad:boolean;
  constructor() { }

  ngOnInit() {
  }
  ngYears(year:number):string{
    if(year > 1){
      return year + " años"
    }else{
      return year + " año";
    }
  }
}
