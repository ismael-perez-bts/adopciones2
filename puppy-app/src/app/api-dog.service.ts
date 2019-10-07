import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Dog } from './models/dogs';
import { catchError } from 'rxjs/operators'
import { User } from './models/user';
import {Response} from './models/Response'

@Injectable({
  providedIn: 'root'
})
export class ApiDogService {
  constructor(private http: HttpClient) {
  }
 
  getDogs(): Observable<Response>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('auth')}`
      })
    }
    return this.http.get<Response>(`${environment.apiUrl}dog/getDogs`, httpOptions)
     .pipe(
       catchError( (err) =>{
         alert('Ocurrió un error')
         return of(err);
       })
     );
  }

  addDog (dog: Dog): Observable<Response> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('auth')}`
      })
    }
    return this.http.post<Response>(`${environment.apiUrl}dog/addDog`, dog, httpOptions)
    .pipe(
      catchError( (err) =>{
        alert('Ocurrió un error')
        return of(err);
      })
    );
  }
  
  deleteDogs(dog:Dog): Observable<Response>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('auth')}`
      })
    }
     const name:string = dog.name;
    return this.http.delete<Response>(`${environment.apiUrl}dog/deleteDog/${name}`, httpOptions);
  }

  createUser(user:User){
    return this.http.post<User>(`http://localhost:5000/api/user`, user)
    // return this.http.post<User>('http://localhost:5000/api/user');
  }
}
