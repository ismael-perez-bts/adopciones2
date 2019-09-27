import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dogs';
import { ApiDogService } from '../api-dog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.scss'],
  providers: [ApiDogService]
})
export class PerrosComponent implements OnInit {

  public dogs$: Observable<Dog[]>;
  constructor(private dogService: ApiDogService) {
    this.dogs$ = this.dogService.getDogs();
    // console.log(this.dogs$);
  }
  ngOnInit() {
  }

}
