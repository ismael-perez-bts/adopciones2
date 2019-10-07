import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
    providedIn:'root'
})
export class LoginService{
    constructor(private http:HttpClient){}
    login(credentials:object){
        // this.http.post('http://localhost:5000/api/user/login',credentials).subscribe((obj:object) =>{
        //     localStorage.setItem('auth', JSON.stringify(obj.data.token));
        // });

         return this.http.post('http://localhost:5000/api/user/login',credentials);
    }
    isLoggedIn(){
        const token = localStorage.getItem('auth');
        return !!token;
    }
}