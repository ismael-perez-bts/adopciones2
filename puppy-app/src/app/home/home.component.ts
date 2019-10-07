import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showSalvar:boolean = true;
  constructor(private route: Router, private loginService: LoginService) { }
  
  ngOnInit() {
    if(localStorage.getItem('auth') === ''){
      alert('You are not logged');
      this.route.navigateByUrl('');
    }
  }
  
  redirigirAdoptar(){
    this.route.navigateByUrl('adoptar');
  }
  redirigirAgregar(){
    this.route.navigateByUrl('agregar');
  }
}
