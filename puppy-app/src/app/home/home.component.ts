import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showSalvar:boolean = true;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  cambiarVista(){
    this.route.navigateByUrl('adoptar');
  }
}
