import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Post } from '../models/Post';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsURL: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  
  getPosts():Observable<Post[]>{
     return this.http.get<Post[]>(`${this.postsURL}`)
     .pipe(map( response => response as Post[])
     , catchError( error => throwError( new Error(error)))
     );

  }

  getPostsByUserId(userId):Observable<Post[]>{
    return this.http.get<Post[]>(`${this.postsURL}?userId=${userId}`)
    .pipe(map(res => res as Post[])
    , catchError( err => throwError( new Error(err)))
    )
  
  }
}
