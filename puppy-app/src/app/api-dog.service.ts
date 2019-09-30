import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Dog } from './models/dogs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiDogService {

  constructor(private http: HttpClient) {

  }
  getDogs(): Observable<Dog[]>{
    return this.http.get<Dog[]>(`${environment.apiUrl}/`)
    .pipe(
      catchError( (err) =>{
        alert('There was an error')
        return of(err);
      })
    );
  }
  addDog (dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(`${environment.apiUrl}/`, dog)
    .pipe(
      catchError( (err) =>{
        alert('There was an error')
        return of(err);
      })
    );
  }
}
