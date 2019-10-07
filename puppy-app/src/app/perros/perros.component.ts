import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Dog } from '../models/dogs';
import { ApiDogService } from '../api-dog.service';
import { Observable } from 'rxjs';
import {Response} from '../models/Response'

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.scss'],
  providers: [ApiDogService]
})

export class PerrosComponent implements OnInit {

  public dogs$: Observable<Response>;
  constructor(private dogService: ApiDogService) {
     this.dogService.getDogs().subscribe((obj:Response)=>{
      this.dogs$ = obj;
    });
  }
  
  // propagar = new EventEmitter<string>();
  elimi(e){
    this.dogs$ = this.dogService.getDogs();
  }
  ngOnInit() {
  }

}
