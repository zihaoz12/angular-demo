import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/User';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = "https://jsonplaceholder.typicode.com/users";
  constructor(
    private http:HttpClient
  ) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.userURL}`)
    .pipe(map( res => res as User[])
    , catchError(err => throwError( new Error(err)))
    )
  }

  addUser(user:User):Observable<any>{
    return this.http.post<any>(`${this.userURL}`,user)
  }

}
